import React from 'react';
import Relay from 'react-relay';

class Subreddit extends React.Component {
  render() {
    const { title, hotListings } = this.props.subreddit;
    return (
      <div>
        <h1>{ title }</h1>
        <ul>
          { hotListings.map((link, index) =>
              <li key={ index }><a href={ link.url }>{ link.title }</a>({ link.score })</li>) }
        </ul>
      </div>
    );
  }
}

export default Relay.createContainer(Subreddit, {
  fragments: {
    subreddit: () => Relay.QL`
      fragment on RedditSubreddit {
        title,
        hotListings(limit: 10) {
          title,
          url,
          score,
        },
      }
    `,
  },
});
