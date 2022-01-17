
const middle = function(arr) {
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

module.exports = middle;

// console.log(middle([1, 2, 3])) // => [2]
// console.log(middle([1, 2, 3, 4, 5])) // => [3]

// console.log(middle([1, 2, 3, 4])) // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]