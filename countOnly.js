const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log('true');
  } else {
    console.log('false');
  }
};


// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function (allItems, itemsToCount) {
  let output = new Object();
  // loop every element in the allItems
  for (let item of allItems) {
    // check whether there is the same item in the itemsToCount
    if (itemsToCount[item] === true) {
      output[item] += 1;
    }
  }
  return output;
}


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
