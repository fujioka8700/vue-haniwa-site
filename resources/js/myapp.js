'use strict';

class Parent {
    static method() {
        console.log("Parent.method");
    }
}
class Child extends Parent {
    static method() {
        console.log("Child.method");
        // `super.method()`で`Parent.method`を呼びだす
        super.method();
    }
}
Child.method();
// コンソールには次のように出力される
// "Child.method"
// "Parent.method"