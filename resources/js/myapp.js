"use strict";

const obj = {
    method() {
        const arrowFunction = () => {
            return this;
        };
        return arrowFunction();
    }
};

// 通常の`this`は`obj.method`の`this`と同じ
console.log(obj.method()); // => obj

// `obj.method`の`this`を変更すれば、Arrow Functionの`this`も変更される
console.log(obj.method.call("THAT")); // => "THAT"