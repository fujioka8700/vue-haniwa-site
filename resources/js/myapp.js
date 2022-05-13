'use strict';

/**
 * リソースの取得に成功した場合は`successCallback(レスポンス)`を呼び出す
 * リソースの取得に失敗した場合は`failureCallback(エラー)`を呼び出す
 */
 function dummyFetch(path, successCallback, failureCallback) {
    setTimeout(() => {
        if (path.startsWith("/success")) {
            successCallback({ body: `Response body of ${path}` });
        } else {
            failureCallback(new Error("NOT FOUND"));
        }
    }, 1000 * Math.random());
}

function successCallback(response) {
    console.log(response); // => { body: "Response body of /success/data" }
};

function failureCallback(error) {
    console.log(error.message); // => "NOT FOUND"
}

// /success/data にリソースが存在するので、`response`にはデータが入る
dummyFetch("/success/data", successCallback, failureCallback);

// /failure/data にリソースは存在しないので、`error`にはエラーオブジェクトが入る
dummyFetch("/failure/data", successCallback, failureCallback);

