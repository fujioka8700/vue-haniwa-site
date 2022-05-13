'use strict';

/**
 * コールバック関数は、関数によって処理を変えたい時に使う
 */
 function dummyFetch(path, callback) {
    setTimeout(() => {
        if (path.startsWith("/success")) {
            callback(null, { body: `Response body of ${path}` });
        } else {
            callback(new Error("NOT FOUND"));
        }
    }, 1000 * Math.random());
}

dummyFetch("/success/data", (error, response) => {
    if (error) {
        // この行は実行されません
    } else {
        console.log(response); // => { body: "Response body of /success/data" }
    }
});

dummyFetch("/failure/data", (error, response )=>{
    if (error) {
        console.log(error.message); // => NOT FOUND
    } else {
        // この行は実行されません
    }
});