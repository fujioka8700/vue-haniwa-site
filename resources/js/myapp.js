"use strict";

const fn = () => console.log("fnが呼び出されました。");


const myFunc = fn;
myFunc();

const array = [1, 2, 3];
const output = value => { console.log(value); }

array.forEach(output);

const obj = {
    method1 : function() {
        console.log("method1が呼び出されました。");
    },
    method2() {
        console.log("method2が呼び出されました。");
    }
};

obj.method1();
obj.method2();

