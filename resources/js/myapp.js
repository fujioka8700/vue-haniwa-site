'use strict';

const x = 10;
const y = x + NaN;
console.log(y);
console.log(typeof y);

function isNaN(x) {
  return x === x;
}

console.log(isNaN(NaN));

console.log(Number.isNaN(NaN));