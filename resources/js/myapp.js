'use strict';

function doAsyncTask() {
    return new Promise(resolve => setTimeout(resolve, 1000));
}

(async function() {
    console.log("実行開始");
    const startTime = Date.now();

    // awaitを使う処理
    const result = await doAsyncTask();
    console.log(`実行終了: ${Date.now() - startTime}ms 経過しました`);
})();