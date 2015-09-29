import axios from 'axios';

class TwitterService {
  getTweets(term, callback) {
    axios.get('/tweets', {
      params: {
        username: term
      }
    }).then((tweets) => {
      callback(tweets.data);
    });
  }
}

export default TwitterService;
