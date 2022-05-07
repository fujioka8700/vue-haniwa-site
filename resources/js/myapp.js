"use strict";

const array = [[["A"], "B"], "C"];
// 引数なしは 1 を指定した場合と同じ
console.log(array.flat()); // => [["A"], "B", "C"]
console.log(array.flat(1)); // => [["A"], "B", "C"]
console.log(array.flat(2)); // => ["A", "B", "C"]
// すべてをフラット化するには Infinity を渡す
console.log(array.flat(Infinity)); // => ["A", "B", "C"]


const array2 = ["A", "B", "C"];
console.log(array2); // => ["A", "B", "C"]