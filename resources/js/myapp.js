// Ballクラスを作成し、次にdraw()メソッドを作成して、キャンバス上に3つの円を描画する
let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");

context.beginPath();

class Ball {
    constructor(x, y, r, color) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.color = color;
    }

    draw() {
        context.fillStyle = this.color;
        context.beginPath();
        context.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        context.fill();    
    }
}

function drawBall(x, y, r, color) {
    context.fillStyle = color;
    context.beginPath();
    context.arc(x, y, r, 0, 2 * Math.PI);
    context.fill();
}

drawBall(50, 50 ,30,  "#ff0000");
drawBall(120, 50 ,30, "#00ff00");
drawBall(190, 50 ,30, "#0000ff");

// new で Ball コンストラクタメソッドが自動的に呼び出される
let redBall = new Ball(50, 120, 30, "#ff0000");
redBall.draw();

let greenBall = new Ball(120, 120 ,30, "#00ff00");
greenBall.draw();

let blueBall = new Ball(190, 120 ,30, "#0000ff");
blueBall.draw();