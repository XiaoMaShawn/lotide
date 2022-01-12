const assertEqual = function (actual, expected) {
  if (actual === expected) {
    return true;
  } else {
    return false;
  }
};

const eqArrays = function (arr1, arr2) {
  let result;
  let output;
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      result = assertEqual(arr1[i], arr2[i]);
      if (result === false) {
        output = false;
        break;
      } else {
        output = true;
      }
    }
    console.log(output);
  }
}

const assertArraysEqual = function (arr1, arr2) {
  let result;
  let output;
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      result = assertEqual(arr1[i], arr2[i]);
      if (result === false) {
        output = `Assertion Failed: ${arr1} !== ${arr2}`;
        break;
      } else {
        output = `Assertion Passed: ${arr1} === ${arr2}`;
      }
    }
    console.log(output);
  }
}

const without = function (source, itemsToRemove) {
  // let output = [];
  // for (let item of itemsToRemove) {
  //   for (let i = 0; i < source.length; i++) {
  //     if (assertEqual(source[i], item) === false) {
  //       output.push(source[i]);
  //     }
  //   }
  // }
  // console.log(output);
  const output = [];
  for (const element of source) {
    for (let i = 0; i < itemsToRemove.length; i++) {
      if (element === itemsToRemove[i]) {
        break;
      }
      if (i === itemsToRemove.length - 1) {
        output.push(element);
      }
    }
  }
  return output;
}
// console.log(output);

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]