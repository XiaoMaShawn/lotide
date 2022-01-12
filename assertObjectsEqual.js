const assertEqual = function (actual, expected) {
  if (actual === expected) {
    return true;
  } else {
    return false;
  }
};


const eqObjects = function (object1, object2) {
  let object1Name = Object.keys(object1);
  let object2Name = Object.keys(object2);
  let output;
  if (object1Name.length == object2Name.length) {
    for (let k in object1) {
      if (!object2[k]) {
        output = false;
      } else {
        if (object1[k] === object2[k]) {
          output = true;
        } else {
          output = false;
        }
      }
    }
  } else {
    output = false;
  }
  return output;
}

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function (actual, expected) {
  // Implement me!
  const inspect = require('util').inspect; // <= add this line
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} === ${inspect(expected)}`);
  }
};

assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' });
assertObjectsEqual({ a: '1', b: 2 }, { b: 3, a: '1' });
