"use strict"

let let_x;
var var_x;
// 宣言後にそれぞれの変数を参照すると`undefined`となる
console.log(let_x); // => undefined
console.log(var_x); // => undefined
// 宣言後に値を代入できる
let_x = "letのx";
var_x = "varのx";

console.log(x); // => ReferenceError: can't access lexical declaration `x' before initialization
// let x = "letのx";

// var宣言より前に参照してもエラーにならない
console.log(x); // => undefined
var x = "varのx";

function fn() {
    // 内側のスコープにあるはずの変数`x`が参照できる
    console.log(x); // => undefined
    {
        var x = "varのx";
    }
    console.log(x); // => "varのx"
}
fn();

// 解釈されたコード
function fn2() {
    // もっとも近い関数スコープの先頭に宣言部分が巻き上げられる
    var x;
    console.log(x); // => undefined
    {
        // 変数への代入はそのままの位置に残る
        x = "varのx";
    }
    console.log(x); // => "varのx"
}
fn2();