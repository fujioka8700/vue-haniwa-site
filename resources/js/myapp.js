"use strict";

const person = {
    fullName: "Brendan Eich",
    sayName: function() {
        // `this`は呼び出し元によって異なる
        return this.fullName;
    }
};
// `sayName`メソッドは`person`オブジェクトに所属する
// `this`は`person`オブジェクトとなる
console.log(person.sayName()); // => "Brendan Eich"
// `person.sayName`を`say`変数に代入する
const say = person.sayName;
// 代入したメソッドを関数として呼ぶ
// この`say`関数はどのオブジェクトにも所属していない
// `this`はundefinedとなるため例外を投げる
// say(); // => TypeError: Cannot read property 'fullName' of undefined
console.log(say);
// const say = person.sayName; は次のようなイメージ
const say2 = function() {
    return this.fullName;
};
// `this`は`undefined`となるため例外を投げる
// say2(); // => TypeError: Cannot read property 'fullName' of undefined