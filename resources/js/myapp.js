// マウスオーバーサムネイル拡大
const pic01 = document.getElementById("pic01");
const pic02 = document.getElementById("pic02");
const pic03 = document.getElementById("pic03");

const picAry =[pic01, pic02, pic03];

picAry.forEach(element => {
    element.addEventListener("mouseover", () => {
        document.getElementById("image").src = element.src;
    });
})