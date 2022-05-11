'use strict';

class Parent {
    method() {
        console.log("Parent.prototype.method");
    }
}

// `Parent`を継承した`Child`を定義
class Child extends Parent {
    // methodの定義はない
}

// `Child`のインスタンスは`Parent`のプロトタイプメソッドを継承している
const instance = new Child();
instance.method(); // "Parent.prototype.method"