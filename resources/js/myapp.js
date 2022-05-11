'use strict';

class MyClass {
    constructor() {
        this.method=()=>{

        }
    }
    method() { }
}

console.log(MyClass.prototype.method);
console.log(typeof MyClass.prototype.method === "function"); // => true
const hoge = new MyClass();
console.log(hoge.method);
// クラスのconstructorはクラス自身を参照する
console.log(MyClass.prototype.constructor === MyClass); // => true