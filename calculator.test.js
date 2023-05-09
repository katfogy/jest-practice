const Calculator = require('./calculator.js');

describe('Calculator class methods', () => {
  const calc = new Calculator(4, 2);

  describe('Add method', () => {
    test('should be added', () => {
      expect(calc.add()).toBe(6);
    });

    it('should be added', () => {
      expect(calc.add()).not.toBe(9);
    });

    test('should be added', () => {
      expect(calc.add() !== 5).toBeTruthy();
    });
  });

  describe('Subtract method', () => {
    test('should be subtracted', () => {
      expect(calc.subtract()).toBe(2);
    });
    test('should be subtracted', () => {
      expect(calc.subtract() !== 10).toBeTruthy();
    });
    test('should be subtracted', () => {
      expect(calc.subtract() !== 2).toBeFalsy();
    });
  });

  describe('Multiply method', () => {
    it('should be multiplied', () => {
      expect(calc.multiply() === 8).toBeTruthy();
    });
    it('should be multiplied', () => {
      expect(calc.multiply() !== 8).toBeFalsy();
    });
    it('should be multiplied', () => {
      expect(calc.multiply()).toBe(8);
    });
  });

  describe('Division method', () => {
    test('should be divided', () => {
      expect(calc.divide()).toBe(2);
    });
    test('should be divided', () => {
      expect(calc.divide() !== 4).toBeTruthy();
    });
    test('should be divided', () => {
      expect(calc.divide()).not.toBe(8);
    });
  });
});