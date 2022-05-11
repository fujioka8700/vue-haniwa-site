'use strict';

class MyArray extends Array {
    get first() {
        console.log(this);
        return this.at(0);
    }

    get last() {
        return this.at(-1);
    }
}

// Arrayを継承しているのでArray.fromも継承している
// Array.fromはIterableなオブジェクトから配列インスタンスを作成する
const array = MyArray.from([1, 2, 3, 4, 5]);
console.log(array instanceof Array); // => true
console.log(array.length); // => 5
console.log(array.first); // => 1
console.log(array.last); // => 5