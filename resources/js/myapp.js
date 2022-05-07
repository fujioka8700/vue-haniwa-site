"use strict";

// "ES(数字+)"にマッチするが、欲しい文字列は数字の部分のみ
const pattern = /ES(\d+)/g;
// iteratorを返す
const matchesIterator = "ES2015、ES2016、ES2017".matchAll(pattern);
for (const match of matchesIterator) {
    // マッチした要素ごとの情報を含んでいる
    // 0番目はマッチした文字列全体、1番目がキャプチャの1番目である数字
    console.log(`match: "${match[0]}", capture1: ${match[1]}, index: ${match.index}, input: "${match.input}"`);
}
// 次の順番でコンソールに出力される
// match: "ES2015", capture1: 2015, index: 0, input: "ES2015、ES2016、ES2017"
// match: "ES2016", capture1: 2016, index: 7, input: "ES2015、ES2016、ES2017"
// match: "ES2017", capture1: 2017, index: 14, input: "ES2015、ES2016、ES2017"