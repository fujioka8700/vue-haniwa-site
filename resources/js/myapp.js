"use strict";

const obj = {
    "key": "value"
};
// `obj`インスタンスは`Object.prototype`に定義されたものを継承する
// `obj.toString`は継承した`Object.prototype.toString`を参照している
console.log(obj.toString === Object.prototype.toString); // => true
// インスタンスからプロトタイプメソッドを呼び出せる
console.log(obj.toString()); // => "[object Object]"

// オブジェクトのインスタンスにtoStringメソッドを定義
const customObject = {
    toString() {
        return "custom value";
    }
};
console.log(customObject.toString()); // => "custom value"

const objA = {};
// `obj`というオブジェクト自体に`toString`メソッドが定義されているわけではない
console.log(Object.hasOwn(objA, "toString")); // => false
// `in`演算子は指定されたプロパティ名が見つかるまで親をたどるため、`Object.prototype`まで見にいく
console.log("toString" in objA); // => true

// オブジェクトのインスタンスにtoStringメソッドを定義
const objB = {
    toString() {
        return "custom value";
    }
};
// オブジェクトのインスタンスが`toString`メソッドを持っている
console.log(Object.hasOwn(objB, "toString")); // => true
console.log("toString" in objB); // => true