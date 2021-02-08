const CustomError = require('../extensions/custom-error');

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let result = 1;
    for (let el in arr) {
      if (!arr.hasOwnProperty(el)) continue;

      if (Array.isArray(arr[el])) {
        let depth = this.calculateDepth(arr[el]) + 1;
        result = Math.max(depth, result);
      }
    }
    return result;
  }
};
