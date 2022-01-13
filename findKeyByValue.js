const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function (obj, str) {
  let result = '';
  //loop through the value of obj.properties
  for (let k in obj) {
    // check whether the value is equal to the string
    if (obj[k] === str) {
      result = k;
    }
  }
  return result;
}

// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comdedy: "Brooklyn Nine-Nine",
//   drama: "The Wire"
// }

// console.log(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"));
// console.log(findKeyByValue(bestTVShowsByGenre, "The Expanse"));