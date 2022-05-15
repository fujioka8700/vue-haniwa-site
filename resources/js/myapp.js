'use strict';

// 不正なDateインスタンスを作成する
const invalid = new Date("");
console.log(invalid.getTime()); // => NaN
console.log(invalid.toString()); // => "Invalid Date"