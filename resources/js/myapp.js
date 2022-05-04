// canvas要素にプログレスバーをひく
let canvas = document.getElementById("myCanvas");

// キャンバスに描画するためのメソッドを提供するオブジェクトを返す
let context = canvas.getContext("2d");

// 長方形を塗りつぶす
context.fillStyle = "#ff0000";

// context.fillStyle(x, y, width, height)
// キャンバスに長方形を描く
context.fillRect(100, 50, 100, 50);