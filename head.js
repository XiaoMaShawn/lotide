// FUNCTION IMPLEMENTATION
const assertEqual = require('./assertEqual');

const head = function(array) {
  if (array.length > 0) {
    return array[0];//you need to return the value, not log the value so that the next function could use it!
  } else {
    return undefined;
  }
}

module.exports = head;