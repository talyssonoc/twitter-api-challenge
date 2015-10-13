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
        currentUsername: term,
        isSearching: false,
        results: results,
        sinceId: results[0].id_str,
        lastId: results[results.length - 1].id_str
      });
    });
  }

  handleScroll() {
    const { twitter } = this.props;

    this.setState({
      isSearching: true
    });

    twitter.getTweets(this.state.currentUsername, (results) => {

      this.setState({
        isSearching: false,
        results: this.state.results.concat(results)
      });
    }, {
      sinceId: this.state.sinceId,
      lastId: this.state.lastId
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
          scrolledToEnd={ () => this.handleScroll() }
        />
      </div>
    );
  }
}

export default App;
