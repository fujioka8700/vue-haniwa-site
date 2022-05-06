"use strict";

const array = [1, 2, 3];
array.some(function(value){
    console.log(value);
    return true;
});

array.forEach(function(value){
    console.log(value);
    return true;
});

const isEven = num => num % 2 === 0;

const array2 = [1, 5, 10, 15, 20];
console.log(array2.filter(isEven)); // => [10, 20]

const obj = {
    "a": 1,
    "b": 2,
    "c": 3
};
// 注記: ループのたびに毎回新しいブロックに変数keyが定義されるため、再定義エラーが発生しない
for (const key in obj) {
    const value = obj[key];
    console.log(`key:${key}, value:${value}`);
}
// "key:a, value:1"
// "key:b, value:2"
// "key:c, value:3"
