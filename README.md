# StackCommerce JS Twitter API Challenge

[![Build Status](https://travis-ci.org/talyssonoc/twitter-api-challenge.svg)](https://travis-ci.org/talyssonoc/twitter-api-challenge)

## App design

I choose React to create the views due to its easy way to deal with DOM changes (since the results should be rendered again everytime I did a new search).

Since Babel transpiles JSX too, I choose to use it and then could use ES6/ES2015 features like "classes", static properties, ES module system and so on.

I alse used Jest to make the tests, since it easily works with React.

The app works in a simple way: when user write some username and press enter in the search box, the client will make a AJAX request (using axios) to `/tweets` sending this username. In the server I take this username and sent to the Twitter API.

The `/tweets` route can be acessed without AJAX, I didn paid to much atention to this part since it's a front-end test, but in a real app it would be needed to protect against requests coming from outside the domain, and also only allow access via AJAX.

For the CSS I used SASS, since it's the most used nowadays.

## Setup

For local setup, you should create a copy of `.env.example` called `.env` and fill the data for the Twitter API.

It is needed that you have Node, npm and gulp installed in your machine.

You must also run `npm install` when you have all the requirements.

## Deploy

You must set your heroku app on the folder and then just run `git push heroku master`.

## Tests

To run the tests, just run `npm test`
