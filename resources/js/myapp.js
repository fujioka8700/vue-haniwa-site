"use strict";

// 改行を\nのエスケープシーケンスとして入力している
const multiline = "1行目\n2行目\n3行目";
console.log(multiline); 
/* 改行した結果が出力される
1行目
2行目
3行目
*/

console.log("¯\_(ツ)_/¯");

const name2 = "JavaScript";
console.log(`Hello ${name2}!`);// => "Hello JavaScript!"

const str = "文字列";
// 配列と同じようにインデックスでアクセスできる
console.log(str[0]); // => "文"
console.log(str[1]); // => "字"
console.log(str[2]); // => "列"

const str2 = "文字列";
console.log(str2.at(0)); // => "文"
console.log(str2.at(1)); // => "字"
console.log(str2.at(2)); // => "列"
console.log(str2.at(-1)); // => "列"

const str3 = "アオイ";
// それぞれの文字をCode Unitのhex値（16進数）に変換する
// toStringの引数に16を渡すと16進数に変換される
console.log(str3.charCodeAt(0).toString(16)); // => "30a2"
console.log(str3.charCodeAt(1).toString(16)); // => "30aa"
console.log(str3.charCodeAt(2).toString(16));  // => "30a4"

const str4 = String.fromCharCode(
    0x30a2, // アのCode Unit
    0x30aa, // オのCode Unit
    0x30a4  // イのCode Unit
);
console.log(str4); // => "アオイ"