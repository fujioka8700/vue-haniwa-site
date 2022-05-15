'use strict';

// fooとして名前つきエクスポートされた変数をmyFooとしてインポートする
import { foo as myFoo } from "./my-module.js";
console.log(myFoo); // => "foo"