"use strict";

const array = ["A", "B", "C"];
const newArray = array.concat(["D", "E"]);
console.log(newArray); // => ["A", "B", "C", "D", "E"]

const array2 = ["A", "B", "C"];
const newArray2 = array2.concat("新しい要素");
console.log(newArray2); // => ["A", "B", "C", "新しい要素"]