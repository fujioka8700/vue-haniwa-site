"use strict"

{
    // OUTERブロックスコープ
    const x = "outer";
    {
        // INNERブロックスコープ
        const x = "inner";
        // 現在のスコープ(INNERブロックスコープ)にある`x`を参照する
        console.log(x); // => "inner"
    }
    // 現在のスコープ(OUTERブロックスコープ)にある`x`を参照する
    console.log(x); // => "outer"
}


// グローバル変数はどのスコープからも参照できる
const globalVariable = "グローバル";
// ブロックスコープ
{
    // ブロックスコープ内には該当する変数が定義されてない -> 外側のスコープへ
    console.log(globalVariable); // => "グローバル"
}
// 関数スコープ
function fn() {
    // 関数ブロックスコープ内には該当する変数が定義されてない -> 外側のスコープへ
    console.log(globalVariable); // => "グローバル"
}
fn();

// ビルトインオブジェクトは実行環境が自動的に定義している
// どこのスコープから参照してもReferenceErrorにはならない
console.log(isNaN); // => isNaN
console.log(Array); // => Array

// "Array"という名前の変数を定義
const Array = 1;
// 自分で定義した変数がビルトインオブジェクトより優先される
console.log(Array); // => 1