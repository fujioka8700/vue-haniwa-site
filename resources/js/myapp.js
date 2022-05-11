'use strict';

function fn() {
}

console.log(fn.prototype);
// `prototype`プロパティにプロトタイプオブジェクトが存在する
console.log(typeof fn.prototype === "object"); // => true

class MyClass {
}

console.log(MyClass.prototype);
// `prototype`プロパティにプロトタイプオブジェクトが存在する
console.log(typeof MyClass.prototype === "object"); // => true