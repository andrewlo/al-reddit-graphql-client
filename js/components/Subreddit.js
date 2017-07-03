import React from 'react';
import Relay from 'react-relay';

import RedditLink from './RedditLink';

class Subreddit extends React.Component {
  render() {
    const { title, hotListings } = this.props.subreddit;
    return (
      <div>
        <h2>{ title }</h2>
        {
          hotListings.map((link, index) =>
            <RedditLink link={ link } key={ index } />)
        }
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
          ${RedditLink.getFragment('link')}
        },
      }
    `,
  },
});
