'use strict';

const func2 =()=> {
  console.log("funcです。");
}

function dummyFunc(func, number, func2) {
  func();
  console.log(number);
  func2();
}

dummyFunc(()=>{
  console.log("dummyFunc実行");
}, 100, func2);