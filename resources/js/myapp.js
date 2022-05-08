"use strict"

const createCounter = () => {
    // 外のスコープから`privateCount`を直接参照できない
    let privateCount = 0;
    return () => {
        privateCount++;
        return `${privateCount}回目`;
    };
};
const counter = createCounter();
console.log(counter()); // => "1回目"
console.log(counter()); // => "2回目"

function greaterThan(n) {
    return function(m) {
        return m > n;
    };
}
// 5より大きな値かを判定する関数を作成する
const greaterThan5 = greaterThan(5);
console.log(greaterThan5(4)); // => false
console.log(greaterThan5(5)); // => false
console.log(greaterThan5(6)); // => true