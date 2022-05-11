'use strict';

class Parent {
    static hello() {
        return "Hello";
    }
}
class Child extends Parent {}
console.log(Child.hello()); // => "Hello"