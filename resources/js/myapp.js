'use strict';

// 時刻のミリ秒値を直接指定する形式
// 1136214245999はUTCにおける"2006年1月2日15時04分05秒999"を表す
const date = new Date(1136214245999);

// 末尾の'Z'はUTCであることを表す
console.log(date.toISOString()); // => "2006-01-02T15:04:05.999Z"