"use strict";

const hoge = {
    a : "value",
    toString : function() {
        return "hello";
    }
}

console.log(hoge.toString());

const array = [1,2,3];
// `Array`のインスタンス -> `Array.prototype` -> `Object.prototype`
console.log(array.hasOwnProperty === Object.prototype.hasOwnProperty); // => true

console.log(array.toString());