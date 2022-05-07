"use strict";

const array = ["A", "B", "C"];
// Spread構文を使った場合
const newArray = ["X", "Y", "Z", ...array];
// concatメソッドの場合
const newArrayConcat = ["X", "Y", "Z"].concat(array);
console.log(newArray); // => ["X", "Y", "Z", "A", "B", "C"]
console.log(newArrayConcat); // => ["X", "Y", "Z", "A", "B", "C"]

const array2 = ["A", "B", "C"];
const newArray2 = ["X", ...array2, "Z"];
console.log(newArray2); // => ["X", "A", "B", "C", "Z"]