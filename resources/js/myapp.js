'use strict';

// catch節のみ
try {
    undefinedFunction();
} catch (error) {
    console.error(error);
}

// finally節のみ
try {
    undefinedFunction();
} finally {
    console.log("この行は実行されます");
}

// finally節のみでは例外がキャッチされないため、この行は実行されません
console.log("Hello World");