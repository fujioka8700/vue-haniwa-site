'use strict';

function createCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  }
}

const myCounter = createCounter();
console.log(myCounter());
console.log(myCounter());

const x = 10;

function printX() {
  console.log(x);
}

function run() {
  const x = 999;
  printX();
}

run();

function createArray() {
  const tempArray = [1, 2, 3];
  return tempArray;
}

const array = createArray();
console.log(array);