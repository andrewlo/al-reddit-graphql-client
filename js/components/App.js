import React from 'react';
import Relay from 'react-relay';
import SubredditRoute from '../routes/SubredditRoute';
import Subreddit from './Subreddit';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSubredditName: 'Toronto',
      subredditInputValue: ''
    };
  }
  handleInputChange = (event) => {
    this.setState({subredditInputValue: event.target.value});
  }
  handleSubmit = (event) => {
    this.setState({currentSubredditName: this.state.subredditInputValue});
    event.preventDefault();
  }
  render() {
    const subredditName = this.state.currentSubredditName;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Subreddit name:
            <input type="text" value={this.state.subredditInputValue}
              onChange={this.handleInputChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <Relay.Renderer
          environment={Relay.Store}
          Container={Subreddit}
          queryConfig={new SubredditRoute({subredditName})}
          renderLoading={() => <div>Loading...</div>}
        />
      </div>
    );
  }
}

export default App;
