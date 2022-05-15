'use strict';

// 現在の時刻を表すインスタンスを作成する
const now = new Date();

// 時刻値だけが欲しい場合にはDate.nowメソッドを使う
console.log(Date.now());

// 時刻値を取得する
console.log(now.getTime());

// 時刻をISO 8601形式の文字列で表示する
console.log(now.toISOString());
