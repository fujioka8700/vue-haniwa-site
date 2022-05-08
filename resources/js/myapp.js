"use strict"

// const [all, fish] = "𩸽のひらき".match(/(.)のひらき/);
// console.log(all); // => "\ude3dのひらき"
// console.log(fish); // => "\ude3d"

// Code Unitの個数を返す
console.log("🍎".length); // => 2
console.log("\uD83C\uDF4E"); // => "🍎"
console.log("\uD83C\uDF4E".length); // => 2


// Code Pointごとの配列にする
// Array.fromメソッドはIteratorを配列にする
const codePoints = Array.from("リンゴ🍎");
console.log(codePoints); // => ["リ", "ン", "ゴ", "🍎"]
// Code Pointの個数を数える
console.log(codePoints.length); // => 4

// 指定した`codePoint`の個数を数える
function countOfCodePoints(str, codePoint) {
    return Array.from(str).filter(item => {
        return item === codePoint;
    }).length;
}
console.log(countOfCodePoints("🍎🍇🍎🥕🍒🍎🍎", "🍎")); // => 4


// 指定した`codePoint`の個数を数える
function countOfCodePoints2(str, codePoint) {
    let count = 0;
    for (const item of str) {
        if (item === codePoint) {
            count++;
        }
    }
    return count;
}
console.log(countOfCodePoints2("🍎🍇🍎🥕🍎🍎🍎🍎🍒🍎", "🍎")); // => 7