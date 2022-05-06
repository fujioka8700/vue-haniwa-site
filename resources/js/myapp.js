"use strict";

function sum(...values) {
    return values.reduce((total, value) => {
        // `value`をNumberで明示的に数値へ変換してから加算する
        return total + Number(value);
    }, 0);
}
const x = 1, z = 10;
let y; // `y`はundefined
console.log(sum(x, y, z)); // => NaN