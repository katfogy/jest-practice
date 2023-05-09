const stringLength = (str) => {
    const newStr = str.length;
    if (newStr >= 1 && newStr <= 10) {
      return newStr;
    } else {
      return 'Str not between 1 and 10';
    }
  };
  
  const reverseStr = (str) => {
    const newStr = str.split('').reverse().join('');
    return newStr;
  };
  
  const capsFirstLetter = (str) => {
    const uppercase = str.charAt(0).toUpperCase() + str.slice(1);
    return uppercase;
  };
  
  module.exports = { stringLength, reverseStr, capsFirstLetter };