"use strict";

// 引数の`obj`を浅く複製したオブジェクトを返す
const shallowClone = (obj) => {
    // console.log(obj);
    // return;
    return Object.assign({}, obj);
};
// 引数の`obj`を深く複製したオブジェクトを返す
function deepClone(obj) {
    const newObj = shallowClone(obj);
    // console.log(newObj);
    // プロパティがオブジェクト型であるなら、再帰的に複製する
    Object.keys(newObj)
        .filter(k => typeof newObj[k] === "object")
        .forEach(function(k) {
            // console.log(newObj[k]);
            // return;
            newObj[k] = deepClone(newObj[k]);
        });
    console.log(newObj);
    return newObj;
}
const obj = {
    level: 1,
    nest: {
        level: 2
    }
};
const cloneObj = deepClone(obj);
// `nest`オブジェクトも再帰的に複製されている
console.log(cloneObj.nest === obj.nest); // => false