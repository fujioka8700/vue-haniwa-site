'use strict';

// YYYY/MM/DD形式の文字列に変換する関数
function formatDate(date) {
    const yyyy = String(date.getFullYear());
    // Stringの`padStart`メソッド（ES2017）で2桁になるように0埋めする
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");
    return `${yyyy}/${mm}/${dd}`;
}

const date = new Date("2006-01-02T15:04:05.999");
console.log(formatDate(date)); // => "2006/01/02"