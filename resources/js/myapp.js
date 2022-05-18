'use strict';

const array = ["one", , "three"];
const array3 = [1, undefined, 3];
console.log(array.at(-1));

// undefinedを返す
console.log(array[-1]);

const obj = {};
console.log(Array.isArray(obj));
console.log(Array.isArray(array));

const typedArray = new Int8Array(8);
console.log(Array.isArray(typedArray));

const array2 = ["one", "two", "three"];
const [first, second, three] = array2;

console.log(first);
console.log(second);
console.log(three);

console.log(array[1]);
console.log(array3[1]);

console.log(Object.hasOwn(array, 1));
console.log(Object.hasOwn(array3, 1));