"use strict";

function printWidgetTitle(widget) {
    const title = widget?.window?.title ?? "未定義";
    console.log(`ウィジェットのタイトルは${title}です`);
}
printWidgetTitle({
    window: {
        title: "Book Viewer"
    }
}); // "ウィジェットのタイトルはBook Viewerです" と出力される
printWidgetTitle({
    // タイトルが定義されてない空のオブジェクト
}); // "ウィジェットのタイトルは未定義です" と出力される

const languages = {
    ja: {
        hello: "こんにちは！"
    },
    en: {
        hello: "Hello!"
    }
};
const langJapanese = "ja";
const langKorean = "ko";
const messageKey = "hello";
// Optional chaining演算子（`?.`）とブラケット記法を組みわせた書き方
console.log(languages?.[langJapanese]?.[messageKey]); // => "こんにちは！"
// `languages`に`ko`プロパティが定義されていないため、`undefined`を返す
console.log(languages?.[langKorean]?.[messageKey]); // => undefined