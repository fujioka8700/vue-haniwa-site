"use strict"

function fn() {
    const x = 1;
    // fn関数のスコープ内から`x`は参照できる
    console.log(x); // => 1
}
fn();
// fn関数のスコープ外から`x`は参照できないためエラー
// console.log(x); // => ReferenceError: x is not defined

function fn2(arg) {
    // fn関数のスコープ内から仮引数`arg`は参照できる
    console.log(arg); // => 1
}
fn2(1);
// fn関数のスコープ外から`arg`は参照できないためエラー
// console.log(arg); // => ReferenceError: arg is not defined


// ブロック内で定義した変数はスコープ内でのみ参照できる
{
    const x = 1;
    console.log(x); // => 1
}
// スコープの外から`x`を参照できないためエラー
console.log(x); // => ReferenceError: x is not defined