"use strict";

// 親がnull、つまり親がいないオブジェクトを作る
const obj = Object.create(null);

// Object.prototypeを継承しないため、hasOwnPropertyが存在しない
console.log(obj.hasOwnProperty); // => undefined

// 空オブジェクトを作成
const obj2 = {};
// "toString"という値を定義してないのに、"toString"が存在している
console.log(obj2["toString"]);// Function
// Mapのような空オブジェクト
const mapLike = Object.create(null);
// toStringキーは存在しない
console.log(mapLike["toString"]); // => undefined

// Mapのような空オブジェクト
const mapLike2 = Object.create(null);
// `Object.prototype`を継承していないため呼び出すと例外が発生する
// console.log(mapLike2.hasOwnProperty("key")); // => Error: hasOwnPropertyメソッドは呼び出せない
console.log(Object.hasOwn(mapLike2, "key"));
