const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(obj, str) {
  let result = '';
  let keysArray = Object.keys(obj);
  //loop through the value of obj.properties
  for (let k of keysArray) {
    // check whether the value is equal to the string
    if (obj[k] === str) {
      result = k;
    }
  }
  return result;
}

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comdedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
}

module.exports = findKeyByValue;

console.log(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"));
console.log(findKeyByValue(bestTVShowsByGenre, "The Expanse"));
console.log(findKeyByValue(bestTVShowsByGenre, "That '70s Show"));

