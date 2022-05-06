"use strict";

// 分割代入 
const obj = {
    key  : "value",
    key2 : "value2"
};

const { key } = obj;
console.log(key);

console.log(null ?? "右辺の値");
console.log(undefined ?? "右辺の値");
console.log(true ?? "左辺の値");
console.log(false ?? "右辺の値");
console.log(0 ?? "右辺の値");
console.log("文字列" ?? "右辺の値");

const valueA = false ? "A" : "B";
console.log(valueA);

console.log(1+2*3);
console.log((1+2)*3);

const a = 1, b = 2, c = a + b;
console.log(c);
