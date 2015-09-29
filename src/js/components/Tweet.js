import React from 'react';
import DateService from '../services/DateService';

class Tweet extends React.Component {
  /*eslint camelcase: 0*/
  render() {
    var { text, created_at } = this.props.tweet;

    created_at = DateService.format(created_at);

    return (
      <div className="tweet">
        <div
          className="tweet__content"
        >
          { text }
        </div>
        <div
          className="tweet__time"
        >
          { created_at }
        </div>
      </div>
    );
  }
}

export default Tweet;
