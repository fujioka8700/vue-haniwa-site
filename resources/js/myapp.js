"use strict"

function doHeavyTask() {
    for (let i = 0; i < 1000; i++) {
        console.log("Hello");        
    }
}
const startTime = Date.now();
doHeavyTask();
const endTime = Date.now();
console.log(`実行時間は${endTime - startTime}ミリ秒`);

// 実行時間を計測したい関数をコールバック関数として引数に渡す
const measureTask2 = (taskFn) => {
    const startTime = Date.now();
    taskFn();
    const endTime = Date.now();
    console.log(`実行時間は${endTime - startTime}ミリ秒`);
};
function doHeavyTask2() {
    for (let i = 0; i < 1000; i++) {
        console.log("Hello");        
    }
}
measureTask2(doHeavyTask2);

console.log(startTime);