"use strict";

function myFunc() {
    console.log(typeof arguments);
    console.log(arguments[0]); // => "a"
    console.log(arguments[1]); // => "b"
    console.log(arguments[2]); // => "c"

    // 配列ではないため、配列のメソッドは持っていない
    console.log(typeof arguments.forEach); // => "undefined"
}
myFunc("a", "b", "c");

function myFunc2() {
    console.log(Array.isArray([1, 2, 3])); // => true
    console.log(Array.isArray(arguments)); // => false
}
myFunc2("a", "b", "c");


function myFunc3() {
    // Array-likeオブジェクトを配列へ変換
    const argumentsArray = Array.from(arguments);
    console.log(Array.isArray(argumentsArray)); // => true
    // 配列のメソッドを利用できる
    argumentsArray.forEach(arg => {
        console.log(arg);
    });
}
myFunc3("a", "b", "c");