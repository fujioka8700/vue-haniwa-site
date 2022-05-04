// ボールを描く
let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");

context.fillStyle = "#0000ff";
context.beginPath();
context.arc(100, 100, 50, 0, 2 * Math.PI);
context.fill();