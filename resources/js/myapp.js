"use strict";

const objectA = { a: "a" };
const objectB = { b: "b" };
const merged = Object.assign({}, objectA, objectB);
console.log(merged); // => { a: "a", b: "b" }

const objecta = { a: "a" };
const objectb = { b: "b" };
const merged2 = Object.assign(objectA, objectB);
console.log(merged2); // => { a: "a", b: "b" }
// `objectA`が変更されている
console.log(objecta); // => { a: "a", b: "b" }
console.log(merged2 === objectb); // => true

// `version`のプロパティ名が被っている
const objectA2 = { version: "a" };
const objectB2 = { version: "b" };
const merged3 = Object.assign({}, objectA2, objectB2);
// 後ろにある`objectB`のプロパティで上書きされる
console.log(merged3); // => { version: "b" }