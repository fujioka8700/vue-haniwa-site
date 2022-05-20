'use strict';

function fn() {

}

console.log(typeof fn.prototype === "object");

class MyClass {
  constructor () {
  }
  method() {
    console.log("プロトタイプメソッド");
  }
}

console.log(typeof MyClass.prototype.method);
console.log(MyClass.prototype.constructor === MyClass);

const instance = new MyClass();
instance.method();