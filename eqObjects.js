const assertEqual = function (actual, expected) {
  if (actual === expected) {
    return true;
  } else {
    return false;
  }
};


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {
  // let object1Name = Object.keys(object1);
  // let object1Value = Object.values(object1);
  // let object2Name = Object.keys(object2);
  // let object2Value = Object.values(object2);
  // let output;
  // if (object1Name.length === object2Name.length) {
  //   for (let i = 0; i < object1Name.length; i++) {
  //     if (assertEqual(object1Name[i], object2Name[i]) && assertEqual(object1Value[i], object2Value[i])) {
  //       output = true;
  //     } else {
  //       output = false;
  //     }
  //   }
  // } else {
  //   output = false;
  // }
  // return output;


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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false