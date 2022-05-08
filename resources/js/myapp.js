"use strict"

function printX() {
    const x = "X";
    console.log(x); // => "X"
}

printX();
// この時点で`"X"`を参照するものはなくなる -> 解放される

function createArray() {
    const tempArray = [1, 2, 3];
    return tempArray;
}
const array = createArray();
console.log(array); // => [1, 2, 3]


const createCounter = () => {
    let count = 0;
    return function increment() {
        // `increment`関数は`createCounter`関数のスコープに定義された`変数`count`を参照している
        count = count + 1;
        return count;
    };
};
// createCounter()の実行結果は、内側で定義されていた`increment`関数
const myCounter = createCounter();
// myCounter関数の実行結果は`count`の評価結果
console.log(myCounter()); // => 1
console.log(myCounter()); // => 2

// countUpとnewCountUpはそれぞれ別のincrement関数(内側にあるのも別のcount変数)
const countUp = createCounter();
const newCountUp = createCounter();
// 参照してる関数(オブジェクト)は別であるため===は一致しない
console.log(countUp === newCountUp);// false
// それぞれの状態も別となる
console.log(countUp()); // => 1
console.log(newCountUp()); // => 1