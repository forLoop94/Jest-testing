class Calculator {
  constructor() {

  }

  add(a, b) {
    return a + b;
  };

  subtract(a, b) {
    return a - b;
  };

  multiply(a, b) {
    return a * b;
  };

  divide(a, b) {
    return a / b;
  }
}

const newCalculator = new Calculator();

module.exports = newCalculator;
