"use strict";

const strings = "赤・青・緑".split("・");
console.log(strings); // => ["赤", "青", "緑"]

const str = "赤・青・緑".split("・").join("、");
console.log(str); // => "赤、青、緑"

const str2 = "あ・い・う".split("・").join("");
console.log(str2);

const n = 100;
console.log(n);

// 文字間に1つ以上のスペースがある
const str3 = "a     b    c      d";
// 1つ以上のスペースにマッチして分解する
const strings3 = str3.split(/\s+/);
console.log(strings3); // => ["a", "b", "c", "d"]

console.log("文字列".length); // => 3

console.log("文字列" === "文字列"); // => true
// 一致しなければfalseとなる
console.log("JS" === "ES"); // => false
// 文字列の長さが異なるのでfalseとなる
console.log("文字列" === "文字"); // => false

// "A"と"B"のCode Unitは65と66
console.log("A".charCodeAt(0)); // => 65
console.log("B".charCodeAt(0)); // => 66
// "A"（65）は"B"（66）よりCode Unitの値が小さい
console.log("A" > "B"); // => false
// 先頭から順番に比較し C > D が falseであるため
console.log("ABC" > "ABD"); // => false