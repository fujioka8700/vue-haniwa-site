"use strict"

function countUp() {
    // countプロパティを参照して変更する
    countUp.count = countUp.count + 1;
    return countUp.count;
}
countUp.count = 0;
// 呼び出すごとにcountが更新される
console.log(countUp()); // => 1
// 直接値を変更できてしまう
countUp.count = 10;
console.log(countUp()); // => 11