'use strict';

class MyClass {
    method() {
        console.log("プロトタイプのメソッド");
    }
}

const instance = new MyClass();

// インスタンスには`method`プロパティがないため、プロトタイプオブジェクトの`method`が参照される
instance.method(); // "プロトタイプのメソッド"

// `instance.method`の参照はプロトタイプオブジェクトの`method`と一致する
const Prototype = Object.getPrototypeOf(instance);
console.log(Prototype.method);
console.log(instance.method);
console.log(instance.method === Prototype.method); // => true