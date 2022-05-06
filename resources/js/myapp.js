"use strict";

function hoge(x, y=200) {
    return x + y;
}

let n = hoge(10);
console.log(n);

const max = Math.max(1, 8, 6, 9);
console.log(max);

function fn(...args) {
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    console.log(args);
}

fn("a", "b", "c");

function printUserId({id}) {
    console.log(id);
}

const user = {
    id : 42
};

printUserId(user);