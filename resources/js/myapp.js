'use strict';

// 親クラス
class Parent {
    constructor(...args) {
        console.log("Parentコンストラクタの処理", ...args);
    }
}

// Parentを継承したChildクラスの定義
class Child extends Parent {
    constructor(...args) {
        // Parentのコンストラクタ処理を呼び出す
        super(...args);
        console.log("Childコンストラクタの処理", ...args);
    }
}

const child = new Child("引数1", "引数2");
// "Parentコンストラクタの処理", "引数1", "引数2"
// "Childコンストラクタの処理", "引数1", "引数2"

class ParentA {}
class ChildA extends ParentA {}

new ChildA();

class ParentB {
    constructor(...args) {
        console.log(...args);
    }
}
class ChildB extends ParentB {
    constructor(...args) {
        super(...args); // 親クラスに引数をそのまま渡す
    }
}

new ChildB("HELLO", "WORLD");