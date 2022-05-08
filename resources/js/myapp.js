"use strict";

function say(message) {
    return `${message} ${this.fullName}！`;
}
const person = {
    fullName: "Brendan Eich"
};
// `this`を`person`に束縛した`say`関数をラップした関数を作る
//  say.bind(person, "こんにちは"); は次のようなラップ関数を作る
const sayPerson = () => {
    return say.call(person, "こんにちは");
};
console.log(sayPerson()); // => "こんにちは Brendan Eich！"