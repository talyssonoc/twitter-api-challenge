var resultsPath = '../src/js/components/Results.js';
var tweetPath = '../src/js/components/Tweet.js';

jest.dontMock(resultsPath);
jest.dontMock(tweetPath);

describe('Results', function() {

  it('should render "..." on first load', function() {
    var React = require('react/addons');
    var Results = require(resultsPath);
    var TestUtils = React.addons.TestUtils;

    var results = TestUtils.renderIntoDocument(
      <Results
        results={[]}
        isSearching={ false }
        isFirstLoad={ true }
      />
    );

    var message = TestUtils.findRenderedDOMComponentWithClass(
      results, 'results__message');

    expect(React.findDOMNode(message).textContent)
      .toEqual('...');
  });

  it('should render "No tweets found for this username."', function() {
    var React = require('react/addons');
    var Results = require(resultsPath);
    var TestUtils = React.addons.TestUtils;

    var results = TestUtils.renderIntoDocument(
      <Results
        results={[]}
        isSearching={ false }
        isFirstLoad={ false }
      />
    );

    var message = TestUtils.findRenderedDOMComponentWithClass(
      results, 'results__message');

    expect(React.findDOMNode(message).textContent)
      .toEqual('No tweets found for this username.');
  });
});
