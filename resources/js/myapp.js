'use strict';

const obj = {
  toString() {
    return "objです";
  }
};

console.log(obj.toString());
console.log("toString" in obj);
console.log(Object.hasOwn(obj, "toString"));

const obj2 = Object.create(Object.prototype);
console.log(obj2.toString() === Object.prototype.toString());

const array = [];
console.log(array instanceof Object);
console.log(array.hasOwnProperty() === Object.prototype.hasOwnProperty());

const numbers = [1, 2, 3];
numbers.toString = function(){ return "numbersです。"; };
console.log(numbers.toString());

const obj3 = Object.create(null);
console.log(obj3.hasOwnProperty);

console.log(obj["toString"]);

// prototypeを継承していないからhasOwnPropertyメソッドは実行できない
// console.log(obj3.hasOwnProperty("toString"))
console.log(Object.hasOwn(obj3, "toString"))