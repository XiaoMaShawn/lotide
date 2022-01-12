const assertEqual = function (actual, expected) {
  if (actual === expected) {
    return true;
  } else {
    return false;
  }
};

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


const letterPositions = function (sentence) {
  const results = {};
  // logic to update results here
  // loop through the sentence
  for (let i = 0; i < sentence.length; i++) {
    // skip the space
    if (sentence[i] !== ' ') {
      if (!results[sentence[i]]) {
        results[sentence[i]] = [i];
      } else {
        results[sentence[i]].push(i);
      }
    }
  }
  return results;
};

// console.log(letterPositions('lighthouse in the house'));