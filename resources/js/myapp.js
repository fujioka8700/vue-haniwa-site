function getValue() {
    const aObj = document.getElementById("a");
    const bObj = document.getElementById("b");
    const a = parseInt(aObj.value);
    const b = parseInt(bObj.value);
    return {
        a: a,
        b: b,
    }
}

function doAdd() {
    let a = getValue().a;
    let b = getValue().b;
    let resultObj = document.getElementById("result");
    resultObj.innerHTML = a + b;
}

function doSub() {
    let a = getValue().a;
    let b = getValue().b;
    let resultObj = document.getElementById("result");
    resultObj.innerHTML = a - b;
}

function doMultiply() {
    let a = getValue().a;
    let b = getValue().b;
    let resultObj = document.getElementById("result");
    resultObj.innerHTML = a * b;
}

function doDivide() {
    let a = getValue().a;
    let b = getValue().b;
    let resultObj = document.getElementById("result");
    resultObj.innerHTML = a / b;
}

window.doAdd = doAdd;
window.doSub = doSub;
window.doMultiply = doMultiply;
window.doDivide = doDivide;