'use strict';

function fn() {
  console.log("fnが呼び出された");
}

const myFunc = fn;
console.log(myFunc);
