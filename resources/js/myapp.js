'use strict';

const map = new Map();
map.set(NaN, "value");

// NaNは===で比較した場合は常にfalse
console.log(NaN === NaN); // => false

// MapはNaN同士を比較できる
console.log(map.has(NaN)); // => true
console.log(map.get(NaN)); // => "value"