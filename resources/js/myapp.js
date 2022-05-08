"use strict";

class Point {
    // 2. コンストラクタ関数の仮引数として`x`には`3`、`y`には`4`が渡る
    constructor(x, y) {
        // 3. インスタンス(`this`)の`x`と`y`プロパティにそれぞれ値を設定する
        this.x = x;
        this.y = y;
        // コンストラクタではreturn文は書かない
    }
}

// 1. コンストラクタを`new`演算子で引数とともに呼び出す
const point = new Point(3, 4);
// 4. `Point`のインスタンスである`point`の`x`と`y`プロパティには初期化された値が入る
console.log(point.x); // => 3
console.log(point.y); // => 4

const obj = {
    method () {
        let count = 0;
        const arrowFunction = () => {
            console.log(++count);
            return this;
        };
        return arrowFunction;
    }
};

const objf = obj.method();
console.log(objf());
console.log(objf());
console.log(objf());
console.log(obj.method());
console.log(obj.method.call("moko"));