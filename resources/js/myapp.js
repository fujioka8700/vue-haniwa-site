// canvas要素にプログレスバーをひく
let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");

// 長方形を描く描画する
context.strokeRect(100, 50, 100, 20);

// 一定の遅延間隔を置いて関数やコードスニペットを繰り返し呼び出します。
let timer = setInterval(drawProgressBar, 200);
let width = 0;

function drawProgressBar() {
   context.fillStyle = "#ff0000";
   context.fillRect(100, 50, width, 20);
   width += 10;
   if (width > 100) {

      // 以前に setInterval() の呼び出しによって
      // 確立されたタイマーを利用した繰り返し動作を取り消します。
      clearInterval(timer);
      
      // width = 0;
      // context.clearRect(100, 50, 100, 20);
      // context.strokeRect(100, 50, 100, 20);
   }
}