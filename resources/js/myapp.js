'use strict';

const obj = {
    foo: "foo",
    hoge: ["hoge", "fuga"],
    toJSON() {
        return "bar";
    }
};

console.log(JSON.stringify(obj)); // => '"bar"'
console.log(JSON.stringify({ x: obj }, null, 2)); // => '{"x":"bar"}'