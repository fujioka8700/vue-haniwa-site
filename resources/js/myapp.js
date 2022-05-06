"use strict";

let x = "文字列" + x;
console.log(x);

// let y = "文字列" + Symbol("シンボルの説明");
// console.log(y);

let y = "文字列" + String(Symbol("シンボルの説明"));
console.log(y);

// const input = window.prompt("数字を入力してください", "42");

const userInput = "任意の文字列";
const num = Number.parseInt(userInput, 10);
console.log(num);
if (Number.isNaN(num)) {
    console.log("パースした結果NaNになった", num);
}

let n = Number({});
console.log(typeof n);

console.log(isNaN(NaN));