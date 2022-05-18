'use strict';

const array = [1, 2, 3];

// 各要素に10を乗算した新しい配列を作成する
const newArray = array.map((currentValue) => {
    return currentValue * 10;
});
console.log(newArray); // => [10, 20, 30]

// 元の配列とは異なるインスタンス
console.log(array === newArray); // => false

const arraySum = array.reduce((total, value)=>{
  return total += value;
}, 0);
console.log(arraySum);

function myfunc() {
  console.log(arguments[1]);
}

myfunc("a", "b", "c");

array.concat("b").concat("d");
console.log(array);

console.log("A".charCodeAt(0));