'use strict';

class Parent {
  constructor (...args) {
    console.log("Parentコンストラクタの処理:", ...args)
  }
  method() {
    console.log("Parent.prototype.method");
  }
  static method() {
    return "methodです";
  }
}

class Child extends Parent {
  constructor (...args) {
    super(...args);
    console.log("Childコンストラクタの処理:", ...args);
    console.log(super.constructor);
  }
}

const child = new Child("引数1", "引数2");
const parent = new Parent("引数1", "引数2");
child.method();

console.log(Child.method());

console.log(child instanceof Child);
console.log(parent instanceof Child);

class MyArray extends Array {
  get first() {
    return this.at(0);
  }
  get last() {
    return this.at(-1);
  }
}

const array = MyArray.from([1,2,3,4,5]);
console.log(array.first);
console.log(array.last);