"use strict";

class PrototypeClass {
    method() {
        // `this`はベースオブジェクトを参照する
        return this;
    };
}

const instance = new PrototypeClass();
const method = instance.method;

// ベースオブジェクトはundefined
console.log(method()); // => undefined