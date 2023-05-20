import Calculator from './calculator.js';

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  it('adds two numbers', () => {
    expect(calculator.add(5, 3)).toBe(8);
    expect(calculator.add(-2, 7)).toBe(5);
    expect(calculator.add(0, 0)).toBe(0);
  });

  it('subtracts two numbers', () => {
    expect(calculator.subtract(10, 4)).toBe(6);
    expect(calculator.subtract(5, 7)).toBe(-2);
    expect(calculator.subtract(0, 0)).toBe(0);
  });

  it('divides two numbers', () => {
    expect(calculator.divide(15, 3)).toBe(5);
    expect(calculator.divide(20, 5)).toBe(4);
    expect(calculator.divide(12, 2)).toBe(6);
  });

  it('throws an error when dividing by zero', () => {
    expect(() => calculator.divide(10, 0)).toThrow('Divisor cannot be zero.');
  });

  it('multiplies two numbers', () => {
    expect(calculator.multiply(2, 6)).toBe(12);
    expect(calculator.multiply(-3, 4)).toBe(-12);
    expect(calculator.multiply(0, 100)).toBe(0);
  });
});
