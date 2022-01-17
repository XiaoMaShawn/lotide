const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return true;
  } else {
    return false;
  }
};

const assertArraysEqual = function(arr1, arr2) {
  let result;
  let output;
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      result = assertEqual(arr1[i], arr2[i]);
      if (result === false) {
        output = `Assertion Failed`;
        break;
      } else {
        output = `Assertion Passed`;
      }
    }
    console.log(output);
  }
}



module.exports = assertArraysEqual;