'use strict';

const bookTitle = "JavaScript Primer";
console.log(bookTitle);

console.log(typeof true);// => "boolean"
console.log(typeof 42); // => "number"
console.log(typeof 9007199254740992n); // => "bigint"
console.log(typeof "JavaScript"); // => "string"
console.log(typeof Symbol("シンボル"));// => "symbol"
console.log(typeof undefined); // => "undefined"
console.log(typeof null); // => "object"
console.log(typeof ["配列"]); // => "object"
console.log(typeof { "key": "value" }); // => "object"
console.log(typeof function() {}); // => "function"
console.log(typeof null);

const str = "こんにちは";
console.log(str);

function fn(){
    var undefined = "独自の未定義値"; // undefinedという名前の変数をエラーなく定義できる
    console.log(undefined); // => "独自の未定義値"
}
fn();

console.log(undefined);

const object = {
    "key" : "value",
    "123" : 456
}

console.log(object.key);
console.log(object["123"]);

const emptyArray = []; // 空の配列を作成
const array = [1, 2, 3]; // 値を持った配列を作成

const array2 = ["index:0", "index:1", "index:2"];

// 0番目の要素を参照
console.log(array[0]); // => "index:0"

// 1番目の要素を参照
console.log(array2[1]); // => "index:1"

// 左辺がnullishであるため、右辺の値の評価結果を返す
console.log(null ?? "右辺の値"); // => "右辺の値"
console.log(undefined ?? "右辺の値"); // => "右辺の値"

// 左辺がnullishではないため、左辺の値の評価結果を返す
console.log(true ?? "右辺の値"); // => true
console.log(false ?? "右辺の値"); // => false
console.log(0 ?? "右辺の値"); // => 0
console.log("文字列" ?? "右辺の値"); // => "文字列"

const a = 1;
const b = 2;
const c = 3;
console.log(a + b * c); // 7
console.log((a + b) * c); // => 9

console.log(1 === "1");
console.log(1 == "1");

console.log(Boolean(false));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(0));
console.log(Boolean(0n));
console.log(Boolean(NaN));
console.log(Boolean(""));

let x;
if (x === undefined) {
  console.log("xがundefinedなら表示");
}

let n = String(1);
console.log(typeof n);

console.log("文字列" + x);