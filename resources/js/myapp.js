"use strict"

// `increment`関数を定義して返す関数
function createCounter() {
    let count = 0;
    // `increment`関数は`count`変数を参照
    function increment() {
        count = count + 1;
        return count;
    }
    return increment;
}
// `myCounter`は`createCounter`が返した関数を参照
const myCounter = createCounter();
console.log(myCounter);
console.log(myCounter()); // => 1
console.log(myCounter()); // => 2
// 新しく`newCounter`を定義する
const newCounter = createCounter();
console.log(newCounter()); // => 1
console.log(newCounter()); // => 2
// `myCounter`と`newCounter`は別々の状態持っている
console.log(myCounter()); // => 3
console.log(newCounter()); // => 3


const x = 10; // ＊1

function printX() {
    // この識別子`x`は常に ＊1 の変数`x`を参照する
    console.log(x); // => 10
}

function run() {
    const x = 20; // ＊2
    printX(); // 常に10が出力される
}

run();