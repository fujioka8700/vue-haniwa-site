// canvas要素にプログレスバーをひく
let canvas = document.getElementById("myCanvas");

// キャンバスに描画するためのメソッドを提供するオブジェクトを返す
let context = canvas.getContext("2d");

// Canvasは「パス」と呼ばれるもので線や曲線、
// 図形の外形を定義します（パスの概念はAdobe Illustratorのパスに似ています）。

// 現在のパスをリセットする際に使用します。 
context.beginPath();

// moveTo(x, y)メソッドは、新しいサブパスの開始点を座標指定する際に使用します。
// 指定する座標は、<canvas>要素の左上端からの距離となります。 
context.moveTo(20, 100);

// lineTo(x, y)メソッドは、直前の座標と指定座標を結ぶ直線を引く際に使用します。
// 指定する座標は、<canvas>要素の左上端からの距離となります。
context.lineTo(200,100);

// 現在の線スタイルでサブパスを輪郭表示する際に使用します。
context.stroke();