"use strict";

const obj = {
    "one": 1,
    "two": 2,
    "three": 3
};
// `Object.keys`はキーを列挙した配列を返す
console.log(Object.keys(obj)); // => ["one", "two", "three"]
// `Object.values`は値を列挙した配列を返す
console.log(Object.values(obj)); // => [1, 2, 3]
// `Object.entries`は[キー, 値]の配列を返す
console.log(Object.entries(obj)); // => [["one", 1], ["two", 2], ["three", 3]]


const obj2 = {
    "one": 1,
    "two": 2,
    "three": 3
};
const keys = Object.keys(obj2);
keys.forEach(key => {
    console.log(key);
});
// 次の値が順番に出力される
// "one"
// "two"
// "three"