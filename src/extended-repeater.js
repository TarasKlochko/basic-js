const CustomError = require('../extensions/custom-error');

module.exports = function repeater(str, options) {
  let result = [];
  let add = [];

  while (add.length < (options.additionRepeatTimes || 1)) {
    add.push(
      options.addition ||
        options.addition === null ||
        options.addition === false
        ? String(options.addition)
        : ''
    );
  }

  while (result.length < (options.repeatTimes || 1)) {
    result.push(str + add.join(options.additionSeparator || '|'));
  }

  return result.join(options.separator || '+');
};
