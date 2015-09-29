import React from 'react';

import App from './components/App';

import TwitterService from './services/TwitterService';

const twitter = new TwitterService();

/*global document*/
React.render(<App twitter={ twitter }/>,
  document.getElementById('app'));
