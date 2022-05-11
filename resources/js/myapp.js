'use strict';

class MyClass {
    constructor() {
        console.log(this);
    }
    method() { }
}

console.log(MyClass.prototype.method);
console.log(typeof MyClass.prototype.method === "function"); // => true
new MyClass();
console.log(MyClass.prototype.constructor);
// クラスのconstructorはクラス自身を参照する
console.log(MyClass.prototype.constructor === MyClass); // => true