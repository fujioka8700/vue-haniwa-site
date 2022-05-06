"use strict";

// 空文字列かどうかを判定
function isEmptyString(str) {
    // `str`がfalsyな値なら、`isEmptyString`関数は`true`を返す
    return !Boolean(str);
}
// 空文字列列の場合は、trueを返す
console.log(isEmptyString("")); // => true
// falsyな値の場合は、trueを返す
console.log(isEmptyString(0)); // => true
// undefinedの場合は、trueを返す
console.log(isEmptyString()); // => true