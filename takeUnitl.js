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


const takeUntil = function (array, callback) {
  // ...
  let output = [];
  // array.forEach((x) => { callback(x) ? break : ouput.push(x) })
  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i])) {
      output.push(array[i]);
    } else {
      break;
    }
  }
  return output;
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);