// ノードを交換
let doReplaceChild = function() {
   let imgNode = document.createElement("img");
   imgNode.src = "images/pose_pien_uruuru_woman.png"

   let divObj = document.getElementById("div");
   divObj.replaceChild(imgNode, divObj.childNodes[0]);
}

window.doReplaceChild = doReplaceChild;