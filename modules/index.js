'use strict';

// import modules in application
const compare = require('./compare.js');
const math = require('./math.js');

console.log('Hello there!');
console.log(comparePrint(6, 3));
//have two numbers
// compare if a < b
// if so, add a & b
// else, subtract a & b


function comparePrint(a, b) {
  if (compare(a, b)) return math.add(a, b);
  else return math.subtract(a, b);
}


