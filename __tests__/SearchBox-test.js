var searchBoxPath = '../src/js/components/SearchBox.js';

jest.dontMock(searchBoxPath);

describe('SearchBox', function() {

  it('should trigger search on enter', function() {
    var React = require('react/addons');
    var SearchBox = require(searchBoxPath);
    var TestUtils = React.addons.TestUtils;

    var onSearch = jest.genMockFunction();

    var search = TestUtils.renderIntoDocument(
      <SearchBox
        onSearch={ onSearch }
      />
    );

   var input = TestUtils.findRenderedDOMComponentWithClass(
                search, 'search-box__term-input');

   input.getDOMNode().value = 'abc';

    React
      .addons
      .TestUtils
      .Simulate
      .keyUp(input, { key: 'Enter' });

    expect(onSearch.mock.calls)
      .toEqual([['abc']]);
  });
});
