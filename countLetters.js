const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('true');
  } else {
    console.log('false');
  }
};

const countLetters = function(strings) {
  // set a result which is an object
  let result = {};
  // loop through the strings
  for (let letter of strings) {
    //chech whether the letter is a space
    if (letter !== ' ') {
      // check whether there is the same property in the result object
      if (!result[letter]) {
        result[letter] = 1;
      } else {
        result[letter] += 1;
      }
    }
  }
  return result;
}

module.exports = countLetters;

console.log(countLetters("lighthouse in the house"));