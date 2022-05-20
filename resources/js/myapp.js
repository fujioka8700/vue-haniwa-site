'use strict';

class Counter {
  constructor () {
    this.count = 0;
    this.increment =()=> {
      this.count++;
    }
  }
  // increment () {
  //   this.count++;
  // }
}

// const MyClass = function (x) {
//   this.x = x;

//   increment () {
//     console.log("val")
//   }
// }

const counterA = new Counter();
const counterB = new Counter();
counterA.increment();
counterA.increment();
console.log(counterA.count);
console.log(counterB.count);

console.log(counterA.increment === counterB.increment);

function func() {
  return "funcです。";
}

const func2 =()=> {
  return "funcです。";
}

console.log(typeof func);
console.log(typeof func2);

// 関数宣言は、その手前でも呼び出せる
{
  var result = func1(1);
  var name = func1.name;
  alert(name + ": " + result);
  // 出力⇒func1: これはfunc1です。値は1

  function func1(n) {
    return "これはfunc1です。値は" + n;
  }
}

// 関数式は、その手前では呼び出せない
{
  var result_NG = func2(2); // × 文法エラー

  // var func2 = function (n) {
  //   return "これはfunc2です。値は" + n;
  // }
}