const stringLength = require('./stringLength.js');

test('Returns the character count of a string', () => {
  expect(stringLength('charles')).toBe(7);
});

test('Returns the character count of a string', () => {
  expect(stringLength('charlesddddddddddddd')).toBe('string should be between 1 and 10 characters');
});

test('Returns the character count of a string', () => {
  expect(stringLength('')).toBe('string should be between 1 and 10 characters');
});