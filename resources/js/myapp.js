"use strict";

class ArrowClass {
    constructor() {
        
        // コンストラクタでの`this`は常にインスタンス
        this.method = () => {

            // Arrow Functionにおける`this`は静的に決まる
            // そのため`this`は常にインスタンスを参照する
            return this;
        };
    }
}

const instanceA = new ArrowClass();
const methodA = instanceA.method;

// 呼び出し方法（ベースオブジェクト）に依存しないため、`this`がインスタンスを参照する
console.log(methodA()); // => instance

const instanceB = new ArrowClass();
console.log(methodA() === instanceB.method());