// Ballクラスを作成し、次にdraw()メソッドを作成して、キャンバス上に3つの円を描画する
let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");
const canvasWidth  = 200;
const canvasHeight = 250;
let direction = "down";

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

    move(distance) {
        this.y += distance;
    }

    getY() {
        return this.y;
    }

    getR() {
        return this.r;
    }
}

let ball = new Ball(100, 50 ,30, "#0000ff");
ball.draw();

function continueRun() {
    // 全てのキャンバスをクリア
    context.clearRect(0, 0, canvasWidth, canvasHeight);

    if (ball.getY() + ball.getR() < canvasHeight && direction == "down") {
        ball.move(10);
        ball.draw();  
    } else {
        direction = "up";
    }
    
    if (ball.getY() - ball.getR() > 0 && direction == "up") {
        ball.move(-10);
        ball.draw();  
    } else {
        direction = "down";
    }
}

// 200ミリ秒ごとに実行
let time = setInterval(continueRun, 200);
