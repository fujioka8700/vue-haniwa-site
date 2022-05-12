'use strict';

try {
    setTimeout(() => {
        throw new Error("非同期的なエラー");
    }, 10);
} catch (error) {
    // 非同期エラーはキャッチできないため、この行は実行されません
    console.log(error.message);
}
console.log("この行は実行されます");