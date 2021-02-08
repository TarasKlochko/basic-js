const CustomError = require('../extensions/custom-error');

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(typeof value !== 'undefined' ? `( ${value} )` : '()');
    return this;
  },
  removeLink(position) {
    if (position > 0 && position < this.chain.length) {
      this.chain.splice(position - 1, 1);
      return this;
    } else {
      this.chain.length = 0;
      throw new Error();
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let result = this.chain.join('~~');
    this.chain.length = 0;
    return result;
  },
};

module.exports = chainMaker;
