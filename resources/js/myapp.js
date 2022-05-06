"use strict";

const obj = {};
// Symbolは例外的に文字列化されず扱える
const symbolKey1 = Symbol("シンボル1");
const symbolKey2 = Symbol("シンボル2");
obj[symbolKey1] = "1";
obj[symbolKey2] = "2";
console.log(obj[symbolKey1]); // => "1"
console.log(obj[symbolKey2]); // => "2"

