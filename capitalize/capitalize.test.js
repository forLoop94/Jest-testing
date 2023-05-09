const capitalize = require('./capitalize.js');

test('Returns a capitalized string', () => {
  expect(capitalize('charles')).toBe('Charles');
})