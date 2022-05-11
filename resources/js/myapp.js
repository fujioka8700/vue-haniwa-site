'use strict';

class Parent {
    method() {
        console.log("Parent.prototype.method");
    }
}

class Child extends Parent {
    method() {
        console.log("Child.prototype.method");
        // `this.method()`だと自分(`this`)のmethodを呼び出して無限ループする
        // そのため明示的に`super.method()`を呼ぶことで、Parent.prototype.methodを呼び出す
        super.method();
    }
}

const child = new Child();
child.method();
// コンソールには次のように出力される
// "Child.prototype.method"
// "Parent.prototype.method"