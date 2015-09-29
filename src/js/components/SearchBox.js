import React from 'react';

class SearchBox extends React.Component {
  handleKeyUp(event) {
    let term = React.findDOMNode(this.refs.termInput).value;

    if(event.key === 'Enter' && term.trim().length) {
      this.props.onSearch(term);
    }
  }

  render() {
    return (
      <div className="search-box">
        <input
          ref="termInput"
          className="search-box__term-input"
          onKeyUp={ (e) => this.handleKeyUp(e) }
        />
      </div>
    );
  }
}

export default SearchBox;
