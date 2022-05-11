'use strict';

class MyClass {
    method() {
        console.log("プロトタイプのメソッド");
    }
}

const instance = new MyClass();

// `instance`の`[[Prototype]]`内部プロパティは`MyClass.prototype`と一致する
const MyClassPrototype = Object.getPrototypeOf(instance);
console.log(MyClassPrototype);
console.log(MyClassPrototype === MyClass.prototype); // => true