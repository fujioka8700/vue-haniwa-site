"use strict";

let array = [1, 2, 3];
console.log(array.length); // => 3
// 新しい配列で変数を上書き
array = [];
console.log(array.length); // => 0


const array2 = [1, 2, 3];
console.log(array2.length); // => 3
// `const`で宣言された変数には再代入できない
array2 = [];