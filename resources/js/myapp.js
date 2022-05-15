'use strict';

// minからmaxまでの乱数を返す関数
function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

// 1以上5未満の浮動小数点数を返す
console.log(getRandom(1, 5));
