'use strict';

// 値が関数のプロパティ
console.log(JSON.stringify({ x: function() {} })); // => '{}'

// 値がSymbolのプロパティ
console.log(JSON.stringify({ x: Symbol("") })); // => '{}'

// 値がundefinedのプロパティ
console.log(JSON.stringify({ x: undefined })); // => '{}'

// 配列の場合
console.log(JSON.stringify({ x: [10, function() {}] })); // => '{"x":[10,null]}'

// キーがSymbolのプロパティ
JSON.stringify({ [Symbol("foo")]: "foo" }); // => '{}'

// 値がRegExpのプロパティ
console.log(JSON.stringify({ x: /foo/ })); // => '{"x":{}}'

// 値がMapのプロパティ
const map = new Map();

map.set("foo", "foo");
console.log(JSON.stringify({ x: map })); // => '{"x":{}}'