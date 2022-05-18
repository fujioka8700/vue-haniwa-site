'use strict';

const name = "名前";
const key = "key-string";

const obj = {
  name,
  [key] : 23
};

console.log(obj);

let obj2 = new Object();
obj2 = function () {
  
}

const obj3 = () => {
  return true;
}
console.log(obj3);

obj.key = "value";
console.log(obj.key);
console.log(obj[key]);

// 悪い例
function changeProperty(obj) {
  obj.key = "値です";
  delete obj.key;
};

changeProperty(obj);
console.log(obj.key);

const object = Object.freeze({key: "value"});
// object.key = "value2";

console.log(object.key);

// obj = obj2;
console.log(obj);

const widget = {
  window: {
    title: "ウィジェットのタイトル"
  },
  size: 1200
}

if (widget.window !== undefined) {
  console.log("widget.windowはある");
}

// console.log(widget.windw);
// console.log(widget.windw.title);

// inを使ってプロパティの存在を確認
if ("window" in widget) {
  console.log("`window`プロパティは存在する");
}

// Object.hasOwnを使ってプロパティの存在を確認
if (Object.hasOwn(widget, "window")) {
  console.log("`window`プロパティは存在する");
}

// Object.prototype.hasOwnPropertyを使ってプロパティの存在を確認
if (widget.hasOwnProperty("window")) {
  console.log("`window`プロパティは存在する");
}

const titleKey = "title";

console.log(widget?.window?.[titleKey]);

console.log(widget.toString());
console.log(String(widget));

const CustomObject = {
  toString() {
    return "カスタムオブジェト";
  }
}

console.log(String(CustomObject));
const obj4 = {};
const keyObject = Symbol("シンボル1");
obj4[keyObject] = "100";
console.log(obj4[keyObject]);
console.log(Object.hasOwn(obj4, "a"));

console.log(Object.keys(widget));
console.log(Object.values(widget));
console.log(Object.entries(widget));

const keys = Object.keys(widget)
keys.forEach((key)=>{
  console.log(key);
});