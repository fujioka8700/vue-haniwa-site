'use strict';

// "value2"が重複するため、片方は無視される
const set = new Set(["value1", "value2", "value2"]);

// セットのサイズは2になる
console.log(set.size); // => 2