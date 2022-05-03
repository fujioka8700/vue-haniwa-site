// 父のノードを取得する
function doGetParentNode() {
    const divObj = document.getElementById("div");
    console.log(divObj.parentNode.nodeName);
}

window.doGetParentNode = doGetParentNode;