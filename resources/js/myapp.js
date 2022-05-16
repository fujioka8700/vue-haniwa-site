'use strict';

const obj = {
  name : "太郎",
  getName() {
    return this.name;
  }
}

const dummyFunc = obj => {
  console.log(obj.getName());
}

function userName(dummyFunc, obj) {
  dummyFunc(obj);
}

userName(dummyFunc, obj);

const fu = hoge => hoge * 2;

console.log(fu(10));