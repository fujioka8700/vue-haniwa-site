'use strict';

// `timeoutMs`ミリ秒後にresolveする
function delay(timeoutMs) {
    return new Promise((resolve, reject) => {
        if (isNaN(timeoutMs)) {
            throw new Error(`「${timeoutMs}」は数値ではない`);
        }
        setTimeout(() => {
            console.log(timeoutMs);
            resolve(timeoutMs);
        }, timeoutMs);
    });
}

const promise1 = delay(1000);
const promise2 = delay("hello");
const promise3 = delay(3000);

Promise.all([promise1, promise2, promise3]).then(function(values) {
    console.log(values); // => [1000, 2000, 3000]
}).catch(error => {
    console.error(error.message);
});