import Relay from 'react-relay';

export default class extends Relay.Route {
  static queries = {
    subreddit: () => Relay.QL`
      query {
        subreddit(name: $subredditName)
      }
    `,
  };
  static paramDefinitions = {
    subredditName: {required: true},
  };
  static routeName = 'SubredditRoute';
}
