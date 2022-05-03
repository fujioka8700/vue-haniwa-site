// bookノードの前のノードと、次のノードを取得する
const btnObj = document.getElementById("btn");

btnObj.addEventListener("mousedown", () => {
   const bookObj = document.getElementById("book");
   document.write(bookObj.previousElementSibling.innerHTML + "<br>");
   document.write(bookObj.nextElementSibling.innerHTML);
});
