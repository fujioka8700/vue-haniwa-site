'use strict';

const map = new Map();

// 新しい要素の追加
map.set("key", "value1");
console.log(map.size); // => 1
console.log(map.get("key")); // => "value1"

// 要素の上書き
map.set("key", "value2");
console.log(map.get("key")); // => "value2"

// キーの存在確認
console.log(map.has("key")); // => true
console.log(map.has("foo")); // => false