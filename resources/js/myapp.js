// 適応するクラスセレクターを変更
function changeFont() {
   let divObj = document.getElementById("div");

   if (divObj.className == "smallFont") {
      divObj.className = "bigFont";
   } else {
      divObj.className = "smallFont"
   }
}

window.changeFont = changeFont;