'use strict';

class ArrayWrapper {
  constructor (array) {
    this.array = array;
  }
  static of(...items) {
    console.log(items);
    return new this(items);
  }
  get length() {
    return this.array.length;
  }
}

const arrayWrapperA = ArrayWrapper.of(1, 2, 3);
const arrayWrapperB = new ArrayWrapper([1, 2, 3]);
console.log(arrayWrapperA);
console.log(arrayWrapperA.length);

console.log(arrayWrapperB);
console.log(arrayWrapperB.length);