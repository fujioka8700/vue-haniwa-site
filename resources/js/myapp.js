'use strict';

const objectA = { a: "a"};
const objectB = { b: "b"};

const merged = Object.assign({}, objectA, objectB);

console.log(merged);

const mergedAB = Object.assign(objectA, objectB);
console.log(mergedAB);
console.log(objectA);
console.log(objectB);
console.log(mergedAB === objectA);

const objectVA = { version: "a" };
const objectVB = { version: "b" };

const mergedB = Object.assign({}, objectVA, objectVB);
console.log(mergedB);