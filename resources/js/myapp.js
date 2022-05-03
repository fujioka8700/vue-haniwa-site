// フローティングハイライト
function doOver(obj) {
   obj.className = "over";
}

function doOut(obj) {
   obj.className = "";
}

function doDown(obj) {
   obj.className = "down";
}

window.doOver = doOver;
window.doOut  = doOut;
window.doDown = doDown;