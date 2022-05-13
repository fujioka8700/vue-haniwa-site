'use strict';

function delay(timeoutMs) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(timeoutMs);
        }, timeoutMs);
    });
}

// `then`メソッドで成功時のコールバック関数だけを登録
delay(100).then((timeoutMs) => {
    console.log(`${timeoutMs}ミリ秒後に呼ばれる`);
});