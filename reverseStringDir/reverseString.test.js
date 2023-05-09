const reverseString = require('./reverseString.js');

test('Returns reversed string', () => {
  expect(reverseString('charles')).toBe('selrahc');
});

test('Returns reversed string', () => {
  expect(reverseString('charle')).not.toBe('selahc');
});