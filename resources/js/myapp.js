'use strict';

const str = new String("string");
console.log(str.toUpperCase());

console.log((new String(str)).toUpperCase());
console.log((new Array(1,2,3)).at(1));

(function () {
  let foo = "foo";
  console.log(foo);
})();

console.log(typeof foo === "undefined");