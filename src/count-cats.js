const CustomError = require('../extensions/custom-error');

module.exports = function countCats(matrix) {
  return matrix
    .reduce((sum, char) => sum.concat(char), [])
    .filter((el) => el === '^^').length;
};
