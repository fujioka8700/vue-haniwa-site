'use strict';

class ConflictClass {
    constructor() {
        this.method = () => {
            console.log("インスタンスオブジェクトのメソッド");
        };
    }

    method() {
        console.log("プロトタイプメソッド");
    }
}

const conflict = new ConflictClass();
conflict.method(); // "インスタンスオブジェクトのメソッド"

// インスタンスの`method`プロパティを削除
delete conflict.method;
conflict.method(); // "プロトタイプメソッド"