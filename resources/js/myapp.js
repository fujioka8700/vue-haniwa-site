'use strict';

// JSONはダブルクォートのみを許容するため、シングルクォートでJSON文字列を記述
const json = '{ "id": 1, "name": "js-primer" }';
const obj = JSON.parse(json);

console.log(obj.id); // => 1
console.log(obj.name); // => "js-primer"