const CustomError = require('../extensions/custom-error');

module.exports = function transform(arr) {
  let array = [...arr];
  if (
    array.length === 1 &&
    (array[0] === '--double-next' ||
      array[0] === '--double-prev' ||
      array[0] === '--discard-next' ||
      array[0] === '--discard-prev')
  ) {
    return array;
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i] === '--double-next') {
      if (i !== array.length - 1) {
        array[i] = array[i + 1];
      } else {
        array.splice(i, 1);
      }
    }
    if (array[i] === '--double-prev') {
      if (i !== 0 && !isNaN(array[i - 1])) {
        array[i] = array[i - 1];
      } else if (array[i - 1] === '--discard-next') {
        array.splice(i - 1, 2);
      } else {
        array.splice(i, 1);
      }
    }
    if (array[i] === '--discard-prev') {
      if (i !== 0) {
        array.splice(i - 1, 2);
      } else {
        array.splice(i, 1);
      }
    }
    if (array[i] === '--discard-next') {
      if (i === 0 || i === array.length - 1 || !isNaN(array[i + 2])) {
        array.splice(i, 2);
      } else {
        array.splice(i + 1, 1);
      }
    }
  }

  return array;
};
