// calculator.test.js
const Calculator = require('./app');

describe('Calculator Tests', () => {
    let calc;

    beforeEach(() => {
        calc = new Calculator();
    });

    test('add: 1 + 2 should equal 3', () => {
        expect(calc.add(1, 2)).toBe(3);
    });

    test('subtract: 5 - 3 should equal 2', () => {
        expect(calc.subtract(5, 3)).toBe(2);
    });

    test('multiply: 2 * 3 should equal 6', () => {
        expect(calc.multiply(2, 3)).toBe(6);
    });

    test('divide: 6 / 2 should equal 3', () => {
        expect(calc.divide(6, 2)).toBe(3);
    });

    test('divide: should throw error when dividing by 0', () => {
        expect(() => calc.divide(5, 0)).toThrow("Cannot divide by zero");
    });
});
