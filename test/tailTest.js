const chai = require('chai');
const deepEqual = chai.assert.deepEqual;
const tail = require('../tail');

describe("#tail", () => {
  it('should return ["Lighthouse", "Labs"] of ["Hello", "Lighthouse", "Labs"]', () => {
    deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"])
  });

  it('should return [2,3,4] of [1,2,3,4]', () => {
    deepEqual(tail([1, 2, 3, 4]), [2, 3, 4])
  })
})




