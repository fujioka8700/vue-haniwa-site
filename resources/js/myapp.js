'use strict';

class MyClass {
    method() {
        console.log("プロトタイプのメソッド");
    }
}

const instance = new MyClass();
console.log(instance.Prototype); // 通常のプロパティのようにはアクセスできません。
instance.method(); // "プロトタイプのメソッド"