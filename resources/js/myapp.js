'use strict';

class Counter {
  constructor (value) {
    this.count = 0;
    this._value = value;
    this.increment =()=> {
      this.count++;
    };
    this.method =()=> {
      return this;
    }
  }
  // increment () {
  //     this.count++;
  // }
  method2() {
    return this;
  }
  get value() {
    console.log("getter");
    return this._value;
  }
  set value(newValue) {
    this._value = newValue;
  }
}

const counter = new Counter(5);
const counterB = new Counter(10);
counter.increment();
console.log(counter.count); // => 1
console.log(counter.increment === counterB.increment); // => true
console.log(counter.method === counterB.method);
console.log(counter.method2 === counterB.method2);
console.log(counter.value);
counter.value = 20;
console.log(counter.value);

const array = [1, 2, 3, 4, 5];
array.length = 2;
console.log(array.join(", "));