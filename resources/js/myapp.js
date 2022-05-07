"use strict";

const myArray = ["A", "B", "C"];
const result = myArray.push("D");
// `push`の返り値は配列ではなく、追加後の配列のlength
console.log(result); // => 4
// `myArray`が参照する配列そのものが変更されている
console.log(myArray); // => ["A", "B", "C", "D"]


const myArrayB = ["A", "B", "C"];
// `concat`の返り値は結合済みの新しい配列
const newArray = myArrayB.concat("D");
console.log(newArray); // => ["A", "B", "C", "D"]
// `myArrayB`は変更されていない
console.log(myArrayB); // => ["A", "B", "C"]
// `newArray`と`myArrayB`は異なる配列オブジェクト
console.log(myArrayB === newArray); // => false