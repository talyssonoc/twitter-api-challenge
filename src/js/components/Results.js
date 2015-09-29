import React from 'react';

import Tweet from './Tweet';

class Results extends React.Component {
  render() {
    const { results } = this.props;
    var content;

    if(this.props.isFirstLoad) {
      content = (
        <div className="results__message">
          ...
        </div>
      );
    }
    else if(this.props.isSearching) {
      content = (
        <div className="results__message">
          Loading results...
        </div>
      );
    }
    else if(!results.length) {
      content = (
        <div className="results__message">
          No tweets found for this username.
        </div>
      );
    }
    else {
      content = results.map((tweet) => (
        <Tweet
          key={ tweet.id_str || Date.now() }
          tweet={ tweet }/>
      ));
    }

    return (
      <div className="results">
        { content }
      </div>
    );
  }
}

Results.defaultProps = {
  results: []
};

export default Results;
