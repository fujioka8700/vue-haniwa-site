'use strict';

const objectA = { a: "a"};
const objectB = { b: "b"};

// spred構文
const merged = {
  ...objectA,
  ...objectB
}

console.log(merged);

function cloneObj(obj) {
   return Object.assign({}, obj)
}

const obj = cloneObj(merged);

console.log(obj);
console.log(obj.a === merged.a);