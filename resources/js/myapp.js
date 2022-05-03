// 父のノードを取得する
let divObj = document.getElementById("doGetParentNode");

divObj.addEventListener("mousedown", () => {
    const divObj = document.getElementById("div");
    console.log(divObj.parentNode.nodeName);
});

window.doGetParentNode = doGetParentNode;