import React from 'react';

import SearchBox from './SearchBox';
import Results from './Results';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      term: '',
      results: [],
      searching: false,
      isFirstLoad: true
    };
  }

  searchTerm(term) {
    const { twitter } = this.props;

    this.setState({
      isSearching: true,
      results: [],
      isFirstLoad: false
    });

    twitter.getTweets(term, (results) => {
      this.setState({
        isSearching: false,
        results: results
      });
    });
  }

  render() {
    return (
      <div className="app">
        <h1 className="app__title">Search for an @username</h1>
        <SearchBox
          onSearch={ (term) => this.searchTerm(term) }
        />
        <Results
          results={ this.state.results }
          isSearching={ this.state.isSearching }
          isFirstLoad={ this.state.isFirstLoad }
        />
      </div>
    );
  }
}

export default App;
