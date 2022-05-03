// 指定された子のノードを削除する
const btnObj = document.getElementById("btn");

btnObj.addEventListener("mousedown", () => {
   const divObj = document.getElementById("div");
   const imgObj = document.getElementById("image");
   if (imgObj) {
      divObj.removeChild(imgObj); 
   }
});