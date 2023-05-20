class Calculator {
    add(a, b) {
      return a + b;
    }
  
    subtract(a, b) {
      return a - b;
    }
  
    divide(a, b) {
      if (b === 0) {
        throw new Error('Divisor cannot be zero.');
      }
      return a / b;
    }
  
    multiply(a, b) {
      return a * b;
    }
  }

  export default Calculator;