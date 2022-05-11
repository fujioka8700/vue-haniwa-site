'use strict';

try {
    // 存在しない変数を参照する
    console.log(x);
    
} catch (error) {
    console.log(error instanceof ReferenceError); // => true
    console.log(error.name); // => "ReferenceError"
    console.log(error.message); // エラーメッセージが表示される
}