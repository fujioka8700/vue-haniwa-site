'use strict';

function asyncMain() {
    return Promise.resolve(42).then(value => {
        console.log(value); // => 42
    });
}
asyncMain(); // Promiseインスタンスを返す

async function dummyHello() {
    return "hello";
}

async function asyncMain2() {
    const value = await dummyHello();
    console.log(value);
}
const asyncPromise = asyncMain2();
console.log(asyncPromise);