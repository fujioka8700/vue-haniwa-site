'use strict';

function sum(...values) {
    return values.reduce((total, value)=>{
        return total + Number(value);
    }, 0);
}

const x = 1, z = 10;
let y;
console.log(sum(x, y, z));

console.log(10 + NaN);

function isEmptyString(str) {
    // return !Boolean(str); // falsyな値が判別できない
    return typeof str === "string" && str.length === 0;
}

console.log(isEmptyString(""));
console.log(isEmptyString(0));
console.log(isEmptyString());