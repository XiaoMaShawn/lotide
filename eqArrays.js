const assertEqual = function (actual, expected) {
  if (actual === expected) {
    return true;
  } else {
    return false;
  }
};

const eqArrays = function (arr1, arr2) {
  // let result;
  // let output;
  // if (arr1.length === arr2.length) {
  //   for (let i = 0; i < arr1.length; i++) {
  //     result = assertEqual(arr1[i], arr2[i]);
  //     // console.log(result);
  //     // if (result === false) {
  //     //   output = false;
  //     //   break;
  //     // } else {
  //     //   output = true;
  //     // }
  //   }
  //   console.log(output);
  // }
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

console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false
