'use strict';

const obj = { id: 1, name: "js-primer" };

// replacer引数を使わない場合はnullを渡して省略するのが一般的です
console.log(JSON.stringify(obj, null, 2));
/*
{
   "id": 1,
   "name": "js-primer"
}
*/