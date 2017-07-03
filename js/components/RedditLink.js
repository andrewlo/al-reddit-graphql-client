import React from 'react';
import Relay from 'react-relay';

class RedditLink extends React.Component {
  render() {
    const { title, url, score, numComments } = this.props.link;
    return (
      <div className="flex flex-column mb3">
        <div className="flex items-center mb2">
          <div className="w2 h2 flex items-center justify-center black bg-yellow mr2">{ score }</div>
          <a className="black dim" href={ url }>{ title }</a>
        </div>
        <div className="i gray w4 ml1">{ numComments } comments</div>
      </div>
    );
  }
}

export default Relay.createContainer(RedditLink, {
  fragments: {
    link: () => Relay.QL`
      fragment on RedditLink {
        title,
        url,
        score,
        numComments,
      }
    `,
  },
});
