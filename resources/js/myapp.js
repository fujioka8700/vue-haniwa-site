'use strict';

// `resolve(42)`された`Promise`インスタンスを作成する
// const fulfilledPromise = new Promise((resolve) => {
//     resolve(42);
// });
//↓
const fulfilledPromise = Promise.resolve(42);

fulfilledPromise.then(value => {
    console.log(value); // => 42
});