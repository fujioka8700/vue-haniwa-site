'use strict';

const set = new Set();

// 値の追加
set.add("a");
console.log(set.size); // => 1

// 重複する値は追加されない
set.add("a");
console.log(set.size); // => 1

// 値の存在確認
console.log(set.has("a")); // => true
console.log(set.has("b")); // => false
