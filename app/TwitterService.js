import Twitter from 'twitter';

class TwitterService {
  constructor() {
    this.client = new Twitter({
      consumer_key: process.env.consumer_key,
      consumer_secret: process.env.consumer_secret,
      access_token_key: process.env.access_token_key,
      access_token_secret: process.env.access_token_secret
    });
  }

  getTweets(term, callback) {
    this.client.get(
    'statuses/user_timeline',
    {
      screen_name: term,
      count: 20
    },
    function(error, tweets, response) {
      if(error) {
        console.log(error);
        return callback({ data: [] });
      }

      callback(tweets);
    });
  }
}

export default TwitterService;
