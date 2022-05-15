'use strict';

const obj = { foo: "foo" };
obj.self = obj;

try {
    const json = JSON.stringify(obj);
    console.log(json);
} catch (error) {
    console.error(error.message); // => "TypeError: Converting circular structure to JSON"
}