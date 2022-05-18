'use strict';

const fun = function () {
  console.log("funです");
}

// console.log(fun);
fun();

const array = [1, 2, 3];

const doubleArray = array.map(value=>{
  return value * 2;
});

console.log(doubleArray);

console.log(array.map(()=>{}));

const output = value => console.log(value);

array.forEach(output);

const obj = {
  name: "太郎",
  getName:()=> {
    console.log(this.toString());
    return this.name;
  }
}

function dummyFunc(obj) {
  console.log(obj.getName());
}

dummyFunc(obj);

if (undefined === window.undefined) {
  console.log("undefinedです");
}

if (false) {
  console.log("実行されません");
}

if (null) {
  console.log("実行されません");
}

if (NaN) {
  console.log("実行されません");
}

const array2 = [10, 20, 30, 40, 50];

// 偶数が含まれているか
const isPassed = array2.some((value)=>{
  return value % 2 === 0;
});
console.log(isPassed);

let count = 0
while (count < 100) {
  count++;
  if (count === 95) {
    continue;
  }
  console.log(count);
}

const filteredArray = array2.filter((value)=>{
  return value % 2 === 0;
});

console.log(filteredArray);

for (const key of filteredArray) {
  console.log(key);
}

const result = array2.reduce((total, num)=>{
  return total + num;
}, 0);
console.log(result);