'use strict';

function echo(x, y) {
  return [x, y];
}

console.log(echo(1));

function addPrefix(text, prefix) {
    const pre = prefix ?? "デフォルト値:";
    return pre + text;
}

console.log(addPrefix("文字列", "カスタム値："));
console.log(addPrefix("文字列"));

function add(...values) {
    return values.reduce((total, value) => {
        return total + value;
    }, 0);
}

console.log(add(1, 2));
console.log(add(1, 2, 3));

console.log(Math.max(10, 20, 30));

function fu() {
  for (const value of arguments) {
      console.log(value);
  }
}

fu("a", "b", "c");

function printUserId({ name, id }) {
    console.log(`名前：${name}`);
    console.log(`ID:${id}`);
}

const user = {
    name : "nanao",
    id : 42
}

printUserId(user);

function print([first, second]) {
  console.log(first);
  console.log(second)
}

const array = [10, 20];
print(array);