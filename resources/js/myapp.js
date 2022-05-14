'use strict';

const map = new Map([
    ["key1", "value1"],
    ["key2", "value2"]
]);
const keys = [];
const values = [];

// keysメソッドの返り値(Iterator)を反復処理する
for (const key of map.keys()) {
    keys.push(key);
}
console.log(keys); // => ["key1","key2"]

// valuesメソッドの返り値(Iterator)を反復処理する
for (const value of map.values()) {
    values.push(value);
}
console.log(values);

// keysメソッドの返り値(Iterator)から配列を作成する
const keysArray = Array.from(map.keys());
console.log(keysArray); // => ["key1","key2"]