const newCalculator = require('./calculator.js');

describe('performs appropriate arithmetic operation', () => {
  test('adds two numbers', () => {
    expect(newCalculator.add(3, 2)).toBe(5);
  });

  test('adds two numbers', () => {
    expect(newCalculator.add(1, 2)).toBe(3);
  });

  test('adds two numbers', () => {
    expect(newCalculator.add(3, 6)).toBe(9);
  });
});

describe('performs appropriate arithmetic operation', () => {
  test('subtracts two numbers', () => {
    expect(newCalculator.subtract(3, 2)).toBe(1);
  });

  test('subtracts two numbers', () => {
    expect(newCalculator.subtract(1, 2)).toBe(-1);
  });

  test('subtracts two numbers', () => {
    expect(newCalculator.subtract(3, 6)).toBe(-3);
  });
});

describe('performs appropriate arithmetic operation', () => {
  test('multiplies two numbers', () => {
    expect(newCalculator.multiply(3, 2)).toBe(6);
  });

  test('multiplies two numbers', () => {
    expect(newCalculator.multiply(1, 2)).toBe(2);
  });

  test('multiplies two numbers', () => {
    expect(newCalculator.multiply(3, 6)).toBe(18);
  });
});

describe('performs appropriate arithmetic operation', () => {
  test('divides two numbers', () => {
    expect(newCalculator.divide(3, 2)).toBe(1.5);
  });

  test('divides two numbers', () => {
    expect(newCalculator.divide(4, 2)).toBe(2);
  });

  test('divides two numbers', () => {
    expect(newCalculator.divide(18, 6)).toBe(3);
  });
});


