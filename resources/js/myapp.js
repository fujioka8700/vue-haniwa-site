"use strict";

const objectA = { a: "a" };
const objectB = { b: "b" };
const merged = {
    ...objectA,
    ...objectB
};
console.log(merged); // => { a: "a", b: "b" }

// `version`のプロパティ名が被っている
const objectAA = { version: "a" };
const objectBB = { version: "b" };
const merged1 = {
    ...objectAA,
    ...objectBB,
    other: "other"
};
// 後ろにある`objectB`のプロパティで上書きされる
console.log(merged1); // => { version: "b", other: "other" }