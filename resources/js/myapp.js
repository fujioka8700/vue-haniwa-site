'use strict';

const userInput = "not json value";
try {
    const json = JSON.parse(userInput);
} catch (error) {
    console.log("パースできませんでした");
}