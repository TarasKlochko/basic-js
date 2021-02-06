const CustomError = require('../extensions/custom-error');

module.exports = function createDreamTeam(members) {
  return Array.isArray(members)
    ? members
        .reduce(
          (sum, el) =>
            typeof el === 'string'
              ? sum + el.trim()[0].toUpperCase()
              : sum + '',
          ''
        )
        .split('')
        .sort()
        .join('')
    : false;
};
