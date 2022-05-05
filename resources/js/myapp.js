// ボールを描く
let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");

context.fillStyle = "#0000ff";
context.beginPath();

// サブパスに円弧を加えます。
// void ctx.arc(x, y, radius, startAngle, endAngle [, counterclockwise]);
// angle 意味：角度
context.arc(100, 100, 50, 0, 2 * Math.PI);

// fill()メソッドは、現在の塗りつぶしスタイルでサブパスを塗りつぶす際に使用します。
// 塗りつぶしスタイルは、fillStyleなどの属性で指定します。
context.fill();