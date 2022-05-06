"use strict";

const foo = null;
console.log(foo);

const obj = {
    "key" : "value"
};

console.log(obj.key);
console.log(obj["key"]);

const ary = [1, 2, 3];
console.log(ary[0]);

// \d 数字([0-9])にマッチ
// + 直前の正規表現の1回以上の反復。
const numberRegExp = /\d+/;
console.log(numberRegExp.test("123"));

const str = new String("文字列");
console.log(str);

const str2 = "文字列";
console.log(typeof str2);
console.log(str2.length);

console.log(2**3);

const ary2 = [1, 2];
const [a, b] = ary2;
console.log(a);
console.log(b);