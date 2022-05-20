'use strict';

try {
  undefinedFunction();
  // console.log(undefinedFunction());
  // throw new Error("カスタムエラー");
} catch (error) {
  console.log(error.message);
} finally {
  console.log("実行される");
}

console.log("例外処理");