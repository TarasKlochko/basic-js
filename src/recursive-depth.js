const CustomError = require('../extensions/custom-error');

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let level = 1;
    for (let el of arr) {
      if (Array.isArray(el)) {
        let depth = this.calculateDepth(el) + 1;
        level = Math.max(depth, level);
      }
    }
    return level;
  }
};
