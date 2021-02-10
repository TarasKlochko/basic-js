const CustomError = require('../extensions/custom-error');

class VigenereCipheringMachine {
  constructor(direction = true) {
    this.direction = direction;
  }
  encrypt(string, key) {
    string = string.toLowerCase();
    key = key.toLowerCase();
    while (string.length > key.length) {
      key += key;
    }

    let result = '';
    let correct = 0;

    for (let i = 0; i < string.length; i++) {
      let char = string.charCodeAt(i) - 97 + (key.charCodeAt(i - correct) - 97);
      if (string.charCodeAt(i) - 97 >= 0 && string.charCodeAt(i) - 97 <= 25) {
        if (char > 25) {
          result += String.fromCharCode(char + 71);
        } else {
          result += String.fromCharCode(
            string.charCodeAt(i) - 97 + (key.charCodeAt(i - correct) - 97) + 97
          );
        }
      } else {
        correct++;
        result += string[i];
      }
    }
    return this.direction
      ? result.toUpperCase()
      : result.toUpperCase().split('').reverse().join('');
  }
  decrypt(string, key) {
    string = string.toLowerCase();
    key = key.toLowerCase();

    while (string.length > key.length) {
      key += key;
    }

    let result = '';
    let correct = 0;

    for (let i = 0; i < string.length; i++) {
      let char =
        string.charCodeAt(i) - 97 - (key.charCodeAt(i - correct) - 97) + 26;
      if (string.charCodeAt(i) - 97 >= 0 && string.charCodeAt(i) - 97 <= 25) {
        if (char > 25) {
          result += String.fromCharCode(char + 71);
        } else {
          result += String.fromCharCode(char + 97);
        }
      } else {
        correct++;
        result += string[i];
      }
    }
    return this.direction
      ? result.toUpperCase()
      : result.toUpperCase().split('').reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;
