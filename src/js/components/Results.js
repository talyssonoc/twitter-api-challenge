import React from 'react';

import Tweet from './Tweet';

class Results extends React.Component {
  constructor(props) {
    super(props);

    document.addEventListener('scroll', () => {
      const loader = React.findDOMNode(this.refs.loader);

      if(loader) {
        const rect = loader.getBoundingClientRect();

        if(rect.top <= (window.innerHeight ||
                            document.documentElement.clientHeight)) {
          this.props.scrolledToEnd();
        }
      }

    });
  }

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
    else if(this.props.isSearching && !results.length) {
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

      var end;

      if(this.props.isSearching) {
        end = (
          <div className="results__message">
            Loading new tweets, sit and wait.
          </div>
        );
      }
      else {
        end = (
          <div ref="loader"></div>
        );
      }

      content.push(end);
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
