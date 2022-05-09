"use strict";

class Counter {
    constructor() {
        this.count = 0;
        this.increment = () => {
            // `this`は`constructor`メソッドにおける`this`（インスタンスオブジェクト）を参照する
            this.count++;
        };
    }
    decrement() {
        this.count--;
    }
}

const counterA = new Counter();
const counterB = new Counter();

// `counterA.increment()`のベースオブジェクトは`counterA`インスタンス
counterA.increment();
counterA.increment();
counterA.decrement();

// 各インスタンスの持つプロパティ(状態)は異なる
console.log(counterA.count); // => 1
console.log(counterB.count); // => 0

console.log(counterA.increment === counterB.increment);