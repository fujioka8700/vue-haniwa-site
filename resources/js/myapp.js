"use strict";

const array = ["A", "B", "C"];
array.push("D"); // "D"を末尾に追加
console.log(array); // => ["A", "B", "C", "D"]
const poppedItem = array.pop(); // 最末尾の要素を削除し、その要素を返す
console.log(poppedItem); // => "D"
console.log(array); // => ["A", "B", "C"]

const array2 = ["A", "B", "C"];
array2.unshift("S"); // "S"を先頭に追加
console.log(array2); // => ["S", "A", "B", "C"]
const shiftedItem = array2.shift(); // 先頭の要素を削除
console.log(shiftedItem); // => "S"
console.log(array2); // => ["A", "B", "C"]