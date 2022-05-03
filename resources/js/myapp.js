// オーバーフローの展開と終了
function change() {
   let div2Obj = document.getElementById("div2");
   
   if (div2Obj.className == "open") {
      div2Obj.className = "close";
   } else {
      div2Obj.className = "open";
   }
}

window.change = change;