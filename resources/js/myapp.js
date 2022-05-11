'use strict';

// プロトタイプチェーンの動作の疑似的なコード
class MyClass {
    constructor() {
        this.method =()=> {
            console.log("インスタンスのメソッド"); 
        };
    }
    method() {
        console.log("プロトタイプのメソッド");
    }
}

const instance = new MyClass();

// `instance.method()`を実行する場合
// 次のような呼び出し処理が行われている
// インスタンスが`method`プロパティを持っている場合
if (Object.hasOwn(instance, "method")) {
    instance.method();
} else {
    // インスタンスの`[[Prototype]]`の参照先（`MyClass`のプロトタイプオブジェクト）を取り出す
    const prototypeObject = Object.getPrototypeOf(instance);

    // プロトタイプオブジェクトが`method`プロパティを持っている場合
    if (Object.hasOwn(prototypeObject, "method")) {
        
        // `this`はインスタンス自身を指定して呼び出す
        prototypeObject.method.call(instance);
    }
}