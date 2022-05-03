// テキストノードの作成
const btnObj = document.getElementById("btn");

btnObj.addEventListener("mousedown", () => {
   let divObj = document.getElementById("div");
   let newNode = document.createTextNode("Good Dreams");
   divObj.appendChild(newNode);
});