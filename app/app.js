import express from 'express';
import cors from 'cors';

import TwitterService from './TwitterService';

const app = express();
const twitter = new TwitterService();

app.use(cors({
  origin: '*'
}));

app.use(express.static(__dirname + '/../build'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/tweets', function(req, res) {
  twitter.getTweets(req.query.username, function(tweets) {
    res.json(tweets);
  });
});

app.listen(process.env.port || 8000, function() {
  console.log('Listening on port 8000');
});
