const CustomError = require('../extensions/custom-error');

module.exports = function transform(arr) {
  let array = [...arr];

  for (let i = 0; i < array.length; i++) {
    if (array[i] === '--double-next') {
      if (i !== array.length - 1) {
        array[i] = array[i + 1];
      }
    }

    if (array[i] === '--double-prev') {
      if (i !== 0) {
        array[i] = array[i - 1];
        i++;
      }
    }

    if (array[i] === '--discard-next') {
      if (i !== array.length - 1) {
        array[i + 1] = array[i];
        i = i + 1;
      }
    }

    if (array[i] === '--discard-prev') {
      if (i !== 0) {
        array[i - 1] = array[i];
      }
    }
  }

  return array.filter(
    (el) =>
      el !== '--discard-next' &&
      el !== '--discard-prev' &&
      el !== '--double-next' &&
      el !== '--double-prev'
  );
};
