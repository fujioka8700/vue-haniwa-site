'use strict';

// `callback`関数を受け取り呼び出す関数
const callCallback = (callback) => {
  // `callback`を呼び出す実装
  callback();
};

const obj = {
  num: 10,
  method() {
      callCallback(()=> {
          // ここでの `this` は`callCallback`の実装に依存する
          // `callback()`のように単純に呼び出されるなら`this`は`undefined`になる
          // Functionの`call`メソッドなどを使って特定のオブジェクトを指定するかもしれない
          // この問題を回避するために`const that = this`のような一時変数を使う
          console.log("call");
          console.log(this);
      });
  },
  method2: function(array) {
    return array.map((value)=>{
      return value * this.num;
    });
  }
};

const array = [1, 2, 3];
console.log(obj.method2(array));