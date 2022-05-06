"use strict";

const obj = { key: "value" };
console.log(obj.toString()); // => "[object Object]"
// `String`コンストラクタ関数は`toString`メソッドを呼んでいる
console.log(String(obj)); // => "[object Object]"

// 独自のtoStringメソッドを定義
const customObject = {
    toString() {
        return "custom value";
    }
};
console.log(String(customObject)); // => "custom value"