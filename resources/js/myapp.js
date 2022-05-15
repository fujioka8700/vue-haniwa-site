'use strict';

// すべての名前つきエクスポートをmyModuleオブジェクトとしてまとめてインポートする
import * as myModule from "./my-module.js";

// // ./side-effects.jsのグローバルコードが実行される
import "./side-effects.js";

// import CommonJS
const { xxx, yyy } = require("./commonJS");

console.log(xxx);
console.log(yyy)

// fooとして名前つきエクスポートされた値にアクセスする
console.log(myModule.foo); // => "foo"

// defaultとしてデフォルトエクスポートされた値にアクセスする
console.log(myModule.default); // => { baz: "baz" }

console.log(window.hoge);
