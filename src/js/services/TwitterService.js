import axios from 'axios';

class TwitterService {
  getTweets(term, callback, options = {}) {
    axios.get('/tweets', {
      params: {
        username: term,
        since_id: options.sinceId,
        last_id: options.lastId
      }
    }).then((tweets) => {
      callback(tweets.data);
    });
  }
}

export default TwitterService;
