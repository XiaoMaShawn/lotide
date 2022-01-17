const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return true;
  } else {
    return false;
  }
};

const findKey = function(obj, callback) {
  let result = '';
  let keysArray = Object.keys(obj);
  //loop through the value of obj.properties
  for (let k of keysArray) {
    // check whether the value of the callback function is true
    if (callback(obj[k])) {
      result = k;
      break;
    }
  }
  return result;
}

module.exports = findKey;

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 3)); 