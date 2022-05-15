'use strict';

// const input = window.prompt("数字を入力してください");
const input = 100;
console.log(input);

const num = Number(input);
console.log(typeof num);

const n2 = Number.parseInt("42px", 10);
console.log(n2);
console.log(typeof n2);

const n3 = Number.parseFloat("1.5");
console.log(n3);
console.log(typeof n3);

const n4 = Number("文字列");
console.log(n4);

console.log(Number(undefined));

const userInput = "aaa";
const num5 = Number.parseInt(userInput, 10);
if (Number.isNaN(num5)) {
    console.log("パースした結果NaNになった", num5);
}