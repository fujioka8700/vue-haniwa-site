"use strict";

class MyClass {
}

// `MyClass`をインスタンス化する
const myClass = new MyClass();

// 毎回新しいインスタンス(オブジェクト)を作成する
const myClassAnother = new MyClass();

// それぞれのインスタンスは異なるオブジェクト
console.log(myClass === myClassAnother); // => false

// クラスのインスタンスかどうかは`instanceof`演算子で判定できる
console.log(myClass instanceof MyClass); // => true
console.log(myClassAnother instanceof MyClass); // => true

const str = "Hello";
console.log(str.split(''));