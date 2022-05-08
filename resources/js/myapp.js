"use strict";

// コンストラクタ関数
const Point = function PointConstructor(x, y) {
    // インスタンスの初期化処理
    this.x = x;
    this.y = y;
    // return {
    //     x : x,
    //     y : y
    // }
};

// `new`演算子でコンストラクタ関数から新しいインスタンスを作成
const point = new Point(3, 4);
console.log(point);
console.log(point instanceof Point);


// 関数でのクラス表現
function MyClassLike() {
}
// 関数なので関数として呼び出せる
MyClassLike();

// `class`構文でのクラス
class MyClass {
}
// クラスは関数として呼び出すと例外が発生する
MyClass(); 