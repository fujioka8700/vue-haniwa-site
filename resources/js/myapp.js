"use strict";

const str = "/正規表現のような文字列/";
// 正規表現で`/`からはじまり`/`で終わる文字列のパターン
const regExpLikePattern = /^\/.*\/$/;
// RegExpの`test`メソッドでパターンにマッチするかを判定
console.log(regExpLikePattern.test(str)); // => true
// Stringメソッドで、`/`からはじまり`/`で終わる文字列かを判定する関数
const isRegExpLikeString = (str) => {
    return str.startsWith("/") && str.endsWith("/");
};
console.log(isRegExpLikeString(str)); // => true