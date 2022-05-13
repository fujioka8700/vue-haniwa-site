'use strict';

// const fulfilledPromise = Promise.resolve(55);
const fulfilledPromise = new Promise((resolve)=>{
    resolve(42);
});

fulfilledPromise.then((value)=>{
    console.log(value);
});