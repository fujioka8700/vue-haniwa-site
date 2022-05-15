'use strict';

// moment.jsで現在時刻のmomentオブジェクトを作る
const now = moment();

// addメソッドで10分進める
const future = now.add(10, "minutes");

// formatメソッドで任意の書式の文字列に変換する
console.log(future.format("YYYY/MM/DD"));