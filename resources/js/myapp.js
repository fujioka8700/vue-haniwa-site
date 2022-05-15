'use strict';

// デフォルトインポート myModule
// 名前付きインポート foo
import myModule, { foo } from "./my-module.js";
console.log(myModule); // => { baz: "baz" }
console.log(foo);