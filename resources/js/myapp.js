"use strict";

// 検索対象となる文字列
const str = "にわにはにわにわとりがいる";
// indexOfは先頭から検索しインデックスを返す - "**にわ**にはにわにわとりがいる"
// "にわ"の先頭のインデックスを返すため 0 となる
console.log(str.indexOf("にわ")); // => 0
// lastIndexOfは末尾から検索しインデックスを返す- "にわにはにわ**にわ**とりがいる"
console.log(str.lastIndexOf("にわ")); // => 6
// 指定した文字列が見つからない場合は -1 を返す
console.log(str.indexOf("未知のキーワード")); // => -1


const str2 = "JavaScript";
const searchWord = "Script";
const index = str2.indexOf(searchWord);
if (index !== -1) {
    console.log(`${searchWord}が見つかりました`);
} else {
    console.log(`${searchWord}は見つかりませんでした`);
}


// 検索対象となる文字列
const str3 = "にわにはにわにわとりがいる";
// startsWith - 検索文字列が先頭ならtrue
console.log(str3.startsWith("にわ")); // => true
console.log(str3.startsWith("いる")); // => false
// endsWith - 検索文字列が末尾ならtrue
console.log(str3.endsWith("にわ")); // => false
console.log(str3.endsWith("いる")); // => true
// includes - 検索文字列が含まれるならtrue
console.log(str3.includes("にわ")); // => true
console.log(str3.includes("いる")); // => true