"use strict";

const obj = {
    "key-1" : "value"
}

console.log(obj["key-1"]);

const color = {
    // それぞれのプロパティは`,`で区切る
    red: "red",
    green: "green",
    blue: "blue"
};

console.log(color.red);

const name = "名前";
// `name`というプロパティ名で`name`の変数を値に設定したオブジェクト
const obj2 = {
    name,
    name2: name
};
console.log(obj2); // => { name: "名前" }

const obj3 = new Object();
console.log(obj3); // => {}

const languages = {
    ja: "日本語",
    en: "英語"
};
const { ja, en } = languages;
console.log(ja); // => "日本語"
console.log(en); // => "英語"

// 空のオブジェクト
const obj4 = {};
// `key`プロパティを追加して値を代入
obj4.key = "value";
console.log(obj4.key); // => "value"

const key = "key-string";
const obj5 = {};
// `key`の評価結果 "key-string" をプロパティ名に利用
obj5[key] = "value of key";
// 取り出すときも同じく`key`変数を利用
console.log(obj5[key]); // => "value of key"

function changeProperty(obj) {
    obj.key = "value";
    // いろいろな処理...
}
const obj6 = {};
changeProperty(obj6); // objのプロパティを変更している
console.log(obj6.key); // => "value"

const obj7 = {
    key1: "value1",
    key2: "value2"
};
// key1プロパティを削除
delete obj7.key1;
// key1プロパティが削除されている
console.log(obj7); // => { "key2": "value2" }

const obj8 = { key: "value" };
console.log(obj8.key);
obj8.key = "Hi!"; // constで定義したオブジェクト(`obj`)が変更できる
console.log(obj8.key); // => "Hi!"

const obj9 = { key: "value" };
// obj9 = {}; // => SyntaxError

const widget = {
    window: {
        title: "ウィジェットのタイトル"
    }
};
// `window`を`windw`と間違えているが、例外は発生しない
// console.log(widget.windw); // => undefined
// さらにネストした場合に、例外が発生する
// `undefined.title`と書いたのと同じ意味となるため
// console.log(widget.windw.title); // => TypeError: widget.windw is undefined
// 例外が発生した文以降は実行されません

const obj10 = {
    key: undefined
};
// `key`プロパティの値が`undefined`である場合
if (obj10.key !== undefined) {
    // この行は実行されません
    console.log("obj10");
}

const obj11 = { key: undefined };
// `key`プロパティを持っているならtrue
if ("key" in obj11) {
    console.log("`key`プロパティは存在する");
}

const obj12 = { key: undefined };
// `obj`が`key`プロパティを持っているならtrueとなる
if (Object.hasOwn(obj12, "key")) {
    console.log("`obj12`は`key`プロパティを持っている");
}