'use strict';

const promise = Promise.resolve();

// Fulfilledの状態となったPromiseインスタンスに対しても
// thenメソッドでコールバック関数を登録できます。
promise.then(() => {
    console.log("2. コールバック関数が実行されました");
});
console.log("1. 同期的な処理が実行されました");