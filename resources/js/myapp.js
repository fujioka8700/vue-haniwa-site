'use strict';

function dummyFetch(path) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (path.startsWith("/resource")) {
                resolve({ body: `Response body of ${path}` });
            } else {
                reject(new Error("NOT FOUND"));
            }
        }, 1000 * Math.random());
    });
}

// 1つでもresolveまたはrejectした時点で次の処理を呼び出す
const fetchedPromise = Promise.race([
    dummyFetch("/resource/A"),
    dummyFetch("/resource/B")
]);

fetchedPromise.then((response) => {
    console.log(response);
}).catch(error => {
    console.error(error); // Error: NOT FOUND
});
