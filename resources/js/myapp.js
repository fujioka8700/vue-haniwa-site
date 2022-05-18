'use strict';

const Prefixer = {
    prefix: "pre",
    prefixArray(strings) {
        const array = strings.map(str => {
            return this.prefix + "-" + str;
        });
        return array;
    }
};

const prefixArray = Prefixer.prefixArray(["a", "b", "c"]); // => TypeError: Cannot read property 'prefix' of undefined
console.log(prefixArray);