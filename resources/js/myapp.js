class ArrayWrapper {
    constructor(array = []) {
        this.array = array;
    }

	// 静的メソッド
    // rest parametersとして要素を受けつける
    static of(...items) {
        return new ArrayWrapper(items);
    }

    get length() {
        return this.array.length;
    }
}

// 配列を引数として渡している
const arrayWrapperA = new ArrayWrapper([1, 2, 3]);

// 静的メソッドの呼び出し
// 要素を引数として渡している
const arrayWrapperB = ArrayWrapper.of(1, 2, 3);

console.log(arrayWrapperA.length); // => 3
console.log(arrayWrapperB.length); // => 3