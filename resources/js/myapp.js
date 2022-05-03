// 全ての子のノードを取得する
let divObj = document.getElementById("doGetChildNodes");

divObj.addEventListener("mousedown", () => {
    const divObj = document.getElementById("div");
    const childNodes = divObj.childNodes;
    for (let i = 0; i < childNodes.length; i++) {
        if (childNodes[i].nodeType == 1) {
            document.write(childNodes[i].nodeName + ",");
            document.write(childNodes[i].nodeType + ",");
            document.write(childNodes[i].innerHTML + "<br>"); 
        }
    }
});
