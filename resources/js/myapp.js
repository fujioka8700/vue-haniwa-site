'use strict';

console.log(globalThis);

function fn1() {
  return this;
}

const fn2 = function() {
  return this;
}

console.log(fn1());
console.log(fn2());

const obj = {
  fullName: "ガム太郎",
  method1() {
    return this.fullName;
  }
}

console.log(obj.method1());

// const say = obj.method1;
// say();

function say(message) {
  return `${this.fullName}さん、${message}`;
}

console.log(say.call(obj, "こんにちは"));