// Jest framework
test('adds 1 + 2 to equal 3', () => {
  expect(1 + 2).toBe(3);
});

// star rating test 1.1.1.1
test('should show the right number of stars filled', () => {
  // test for no stars
  // test for full stars
  // test for 3.5 stars
});

// pricing 1.1.1.4
// may be adaptable for any change on selection function
test('should show the price of currently selected style', () => {
  // test that the initial style matches the initial price
  // test that the when the style has change the the price now matched the new selected price
});

// overview is displayed when exists 1.1.1.5
// may be adaptable for any show if exists function
test('should show style overview if exists', () => {
  // should show product overview if one exists
  // should not show product overview if one exists
});

// share on social media - 1.1.1.6 link provide actually links back specific style
test('should link back to the specific style currently selected', () => {
  // should create a link to the specific current style
  // maybe should interact with social media apis to allow posting
});

// default selection should be first in list 1.1.2.
test('the default current style should be the first in the list', () => {
  // the initial state of selected should match the first item in the list
});

// the current selection should change on list item click 1.1.2
// abstracted to work elsewhere
test('the current selected item should change by clicking on an item', () => {
  // initial selection matches the indented initial state
  // onclick/selection the current selected changes to match that which was chosen
});

// 1.1.3.1
// size selector
test('size selector reads out of stock and is inactive when item is out of stock', () => {});
