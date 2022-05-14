'use strict';

const map = new Map([["key1", "value1"], ["key2", "value2"]]);
const results = [];

for (const [key, value] of map) {
    results.push(`${key}:${value}`);
}
console.log(results); // => ["key1:value1","key2:value2"]