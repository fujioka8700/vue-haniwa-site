'use strict';

const set = new Set(["a", "b"]);
const results = [];

set.forEach((value) => {
    results.push(value);
});
console.log(results); // => ["a","b"]