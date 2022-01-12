const assertEqual = function (actual, expected) {
  if (actual === expected) {
    return true;
  } else {
    return false;
  }
};


const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (!assertEqual(arr1[i], arr2[i])) {
      return false;
    }
  }
  return true;
}

const assertArraysEqual = function (arr1, arr2) {
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

const middle = function (arr) {
  let output = [];
  if (arr.length === 1 || arr.length === 2) {
    output = [];
  }
  if (arr.length % 2 === 0) {
    output.push(arr[arr.length / 2 - 1]);
    output.push(arr[arr.length / 2]);
  } else {
    output.push(arr[Math.floor(arr.length / 2)])
  }
  return output;
}

console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]

console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]