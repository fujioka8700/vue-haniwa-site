'use strict';

const map = new Map();

map.set("key1", "value1");
map.set("key2", "value2");
console.log(map.size); // => 2

map.delete("key1");
console.log(map.size); // => 1

map.clear();
console.log(map.size); // => 0