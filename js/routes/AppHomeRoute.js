import Relay from 'react-relay';

export default class extends Relay.Route {
  static queries = {
    subreddit: () => Relay.QL`
      query {
        subreddit(name: "toronto")
      }
    `,
  };
  static routeName = 'AppHomeRoute';
}
