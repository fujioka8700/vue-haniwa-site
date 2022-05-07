"use strict";

const array = ["Java", "JavaScript", "Ruby"];
const indexOfJS = array.indexOf("JavaScript");

console.log(indexOfJS); // => 1
console.log(array[indexOfJS]); // => "JavaScript"

// "JS" という要素はないため `-1` が返される
console.log(array.indexOf("JS")); // => -1

const obj = { key: "value" };
const array2 = ["A", "B", obj];
console.log(array2.indexOf({ key: "value" })); // => -1
// リテラルは新しいオブジェクトを作るため、異なるオブジェクトだと判定される
console.log(obj === { key: "value" }); // => false
// 等価のオブジェクトを検索してインデックスを返す
console.log(array2.indexOf(obj)); // => 2


// colorプロパティを持つオブジェクトの配列
const colors = [
    { "color": "red" },
    { "color": "green" },
    { "color": "blue" }
];
// `color`プロパティが"blue"のオブジェクトのインデックスを取得
const indexOfBlue = colors.findIndex((obj) => {
    return obj.color === "green";
});
console.log(indexOfBlue); // => 2
console.log(colors[indexOfBlue]); // => { "color": "blue" }