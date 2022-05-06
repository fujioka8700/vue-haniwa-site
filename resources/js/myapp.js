"use strict";

const shallowClone = (obj) => {
    return Object.assign({}, obj);
};
const obj = {
    level: 1,
    nest: {
        level: 2
    },
};
const cloneObj = shallowClone(obj);
// `nest`プロパティのオブジェクトは同じオブジェクトのままになる 
console.log(cloneObj.nest === obj.nest); // => true
console.log(cloneObj === obj); // => true
console.log(cloneObj);
console.log(obj);