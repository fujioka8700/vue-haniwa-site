// キャンバスに3つの円を描く関数 drawBall(x, y, r, color) を作成する
let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");

context.beginPath();

function drawBall(x, y, r, color) {
    context.fillStyle = color;
    context.beginPath();
    context.arc(x, y, r, 0, 2 * Math.PI);
    context.fill();
}

drawBall(50, 50 ,30,  "#ff0000");
drawBall(120, 50 ,30, "#00ff00");
drawBall(190, 50 ,30, "#0000ff");
