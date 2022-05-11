'use strict';

// 文字列を例外として投げるアンチパターンの例
try {
    throw "例外が投げられました";
} catch (error) {
    // catch節の例外識別子は、投げられた値を参照する
    console.log(error); // => "例外が投げられました"
}