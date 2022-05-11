'use strict';

class ArrayWrapper {
    constructor(array = []) {
        this.array = array;
    }

    static of(...items) {
        // `this`は`ArrayWrapper`を参照する
        const hoge = new this(items);
        console.log(hoge);
        return hoge;
    }

    get length() {
        return this.array.length;
    }
}

const arrayWrapper = ArrayWrapper.of(1, 2, 3);
console.log(arrayWrapper.length); // => 3