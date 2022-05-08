"use strict"

// Stringの`toUpperCase`メソッドを呼び出せる
console.log("string".toUpperCase()); // => "STRING"

// "input value"の値をラップしたStringのインスタンスを生成
const str = new String("input value");
// StringのインスタンスメソッドであるtoUpperCaseを呼び出す
console.log(str.toUpperCase()); // => "INPUT VALUE"

// プリミティブの文字列は"string"型
const str2 = "文字列";
console.log(typeof str2); // => "string"
// ラッパーオブジェクトは"object"型
const stringWrapper = new String("文字列");
console.log(typeof stringWrapper); // => "object"

const str3 = "文字列3";
console.log(str3.toUpperCase());
console.log((new String(str3)).toUpperCase());

const stringWrapper2 = new String(str3);
console.log(stringWrapper2.valueOf());

// OK: リテラルを使う
const str4 = "文字列";
// NG: ラッパーオブジェクトを使う
const stringWrapper4 = new String("文字列");

console.log(typeof str4);
console.log(typeof stringWrapper4);
