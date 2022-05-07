"use strict";

const str = "ABCDE";
console.log(str.slice(1)); // => "BCDE"
console.log(str.slice(1, 5)); // => "BCDE"
// マイナスを指定すると後ろからの位置となる
console.log(str.slice(-1)); // => "E"
// インデックスが1から4の範囲を取り出す
console.log(str.slice(1, 4)); // => "BCD"
// 第一引数 > 第二引数の場合、常に空文字列を返す
console.log(str.slice(4, 1)); // => ""

const str2 = "ABCDE";
console.log(str2.substring(1)); // => "BCDE"
console.log(str2.substring(1, 5)); // => "BCDE"
// マイナスを指定すると0として扱われる
console.log(str2.substring(-1)); // => "ABCDE"
// 位置:1から4の範囲を取り出す
console.log(str2.substring(1, 4)); // => "BCD"
// 第一引数 > 第二引数の場合、引数が入れ替わる
// str.substring(1, 4)と同じ結果になる
console.log(str2.substring(4, 1)); // => "BCD"

const url = "https://example.com?param=1";
const indexOfQuery = url.indexOf("?");
console.log(indexOfQuery);
const queryString = url.slice(indexOfQuery);
console.log(queryString); // => "?param=1"