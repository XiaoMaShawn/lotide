# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @shawnxm/lotide`

**Require it:**

`const _ = require('@shawnxm/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head`: get the first element of an array.
* `tail`: get the elements except the first one.
* `middle`: get the middle elements of an array.
* `assertArrayEqual`: check whether two arrays are equal.
* `assertEqual`: check whether two primitive data are equal.
* `assertObjectsEqual`:  take in two objects and console.log an appropriate message to the console.
* `countLetters`: take in a sentence (as a string) and then return a count of each of the letters in that sentence.
* `countOnly`: return an object, which properly report all the strings found in the input array, and their respective counts. 
* `eqArrays`: take in two arrays and check whether they are equal.
* `eqObjects`: take in two objects and returns true or false, based on a perfect match.
* `findKey`: takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.
* `findKeyByValue`: takes in an object and a value. It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.
* `letterPositions`: return all the indices (zero-based positions) in the string where each character is found.
* `map`: take in an array and a callback functioin, return a new array based on the results of the callback function. 
* `takeUntil`: return a slice of the array with elements taken from the beginning. It should keep going until the callback/predicate returns a truthy value.
* `without`: will return a subset of a given array, removing unwanted elements.



