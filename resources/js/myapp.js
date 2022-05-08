"use strict";

const fn = () => {
    return this;
};

// Scriptコンテキストの場合、スクリプト直下のArrow Functionの`this`はグローバルオブジェクト
console.log(fn()); // グローバルオブジェクト

// callで`this`を`{}`にしようとしても、`this`は変わらない
console.log(fn.call({}) === this); // グローバルオブジェクト