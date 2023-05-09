const { stringLength, reverseStr, capsFirstLetter } = require('./string.js');

describe('String length function', () => {
  test('should be length is between 1 and 10', () => {
    const str = 'Genesis';
    const len = str.length;
    expect(stringLength(str)).toBe(len);
  });

  test('should be length less than 1', () => {
    const str = '';
    const error = 'Str not between 1 and 10';
    expect(stringLength(str)).toBe(error);
  });

  test('should be length greater than 10', () => {
    const str = 'Smoothing Cleanser';
    const error = 'Str not between 1 and 10';
    expect(stringLength(str)).toBe(error);
  });
});

describe('String reverse function', () => {
  test('should be reversed', () => {
    const str = 'Hello';
    expect(reverseStr(str)).toBe('olleH');
  });
});

describe('First letter uppercase', () => {
  it('should be first letter uppercase', () => {
    const str = 'tegs';
    expect(capsFirstLetter(str)).toBe('Tegs');
  });

  it('should not be first letter uppercase', () => {
    const str = 'tegs';
    expect(capsFirstLetter(str)).not.toBe('tegs');
  });
});