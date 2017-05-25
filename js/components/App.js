import React from 'react';
import Relay from 'react-relay';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Subreddit list</h1>
        <ul>
          { this.props.subreddit.hotListings.map((link, index) =>
              <li key={ index }><a href={ link.url }>{ link.title }</a></li>) }
        </ul>
      </div>
    );
  }
}

export default Relay.createContainer(App, {
  fragments: {
    subreddit: () => Relay.QL`
      fragment on RedditSubreddit {
        hotListings(limit: 10) {
          title,
          url,
        },
      }
    `,
  },
});
