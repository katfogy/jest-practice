const { stringLength, reverseStr, capsFirstLetter } = require('./string.js');

describe('String length function', () => {
  it('should be length is between 1 and 10', () => {
    const str = 'Foga';
    const len = str.length;
    expect(stringLength(str)).toBe(len);
  });

  it('should be length less than 1', () => {
    const str = '';
    const error = 'Str not between 1 and 10';
    expect(stringLength(str)).toBe(error);
  });

  it('should be length greater than 10', () => {
    const str = 'coding is fun';
    const error = 'Str not between 1 and 10';
    expect(stringLength(str)).toBe(error);
  });
});

describe('String reverse function', () => {
  it('should be reversed', () => {
    const str = 'rabu';
    expect(reverseStr(str)).toBe('ubar');
  });
});

describe('First letter uppercase', () => {
  it('should be first letter uppercase', () => {
    const str = 'foga';
    expect(capsFirstLetter(str)).toBe('Foga');
  });

  it('should not be first letter uppercase', () => {
    const str = 'foga';
    expect(capsFirstLetter(str)).not.toBe('foga');
  });
});