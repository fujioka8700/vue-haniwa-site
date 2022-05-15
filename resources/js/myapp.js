'use strict';

const obj = { id: 1, name: "js-primer" };
console.log(JSON.stringify(obj, null, "\t"));
/*
{
   "id": 1,
   "name": "js-primer"
}
*/