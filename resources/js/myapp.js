"use strict"

// 匿名関数を宣言 + 実行を同時に行っている
window.foo = (function() {
    // 関数のスコープ内でfoo変数を宣言している
    var foo = "foo";
    console.log(foo); // => "foo"
})();
// foo変数のスコープ外
console.log(typeof foo === "undefined"); // => true