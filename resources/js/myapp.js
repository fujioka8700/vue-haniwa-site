'use strict';

const map = {};

// マップがキーを持つことを確認する
function has(key) {
    return typeof map[key] !== "undefined";
}
console.log(has("foo")); // => false

// Objectのプロパティが存在する
console.log(has("constructor")); // => true