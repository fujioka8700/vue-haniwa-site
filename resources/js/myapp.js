"use strict";

let x;

if (!x) {
    console.log('falsyな値なら表示:' + x);
}

let x2;

if (x2 == undefined) {
    console.log('xがundefinedなら表示:' + x);
}

let x3 = String([1, 2, 3]);
console.log(x3);

let x4 = String({key:"value"});
console.log(x4);

const sym = Symbol();
console.log(sym); //[object Symbol] { ... }
console.log(typeof sym); //symbol

const sym1 = Symbol();
const sym2 = Symbol();
console.log(sym1);
console.log(sym2);

console.log(sym1 === sym2); //false

const sym3 = [];
for (let i = 0; i < 100; i++) {
    sym3.push(Symbol());
}

sym3.forEach(element => console.log(element));