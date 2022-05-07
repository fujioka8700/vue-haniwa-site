"use strict";


// 未定義の箇所が1つ含まれる疎な配列
// インデックスが1の値を省略しているので、カンマが2つ続いていることに注意
const sparseArray = [1,, 3];
console.log(sparseArray.length); // => 3
// 1番目の要素は存在しないため undefined が返る
console.log(sparseArray[1]); // => undefined


const array = ["a", "b", "c"];
//
console.log(array.at(0)); // => "a"
console.log(array.at(1)); // => "b"

// 後ろから1つ目の要素にアクセス
console.log(array.at(-1)); // => "c"

// -1は、次のように書いた場合と同じ結果
console.log(array[array.length - 1]); // => "c"


const obj = {};
const array2 = [];
console.log(Array.isArray(obj)); // => false
console.log(Array.isArray(array2)); // => true


// TypedArrayを作成
const typedArray = new Int8Array(8);
console.log(Array.isArray(typedArray)); // => false

const array3 = ["one", "two", "three"];
const [first, second, third] = array3;
console.log(first);  // => "one"
console.log(second); // => "two"
console.log(third);  // => "three"