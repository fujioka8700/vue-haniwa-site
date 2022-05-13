'use strict';

async function doAsync() {
    // return "値";
    throw Error("エラー");
}

// doAsync関数はPromiseを返す
doAsync().then(value => {
    console.log(value); // => "値"
}).catch((error) => {
    console.log(error.message);
});
