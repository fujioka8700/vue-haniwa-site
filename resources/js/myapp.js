'use strict';

const map = new WeakMap();

// キーとなるオブジェクト
let obj = {};

// {} への参照をキーに値をセットする
map.set(obj, "value");

console.log(map.get(obj));

// WeakMapはiterableオブジェクトではない
for (const value of map) {
    // 出力できない
    console.log(value)
}

// {} への参照を破棄する
obj = null;

// GCが発生するタイミングでWeakMapから値が破棄される