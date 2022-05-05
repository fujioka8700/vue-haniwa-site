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

    move(distance) {
        this.y += distance;
    }
}

let blueBall = new Ball(100, 50 ,30, "#0000ff");
blueBall.draw();

function continueRun() {
    // 全てのキャンバスをクリア
    context.clearRect(0, 0, 200, 250);
    blueBall.move(1);
    blueBall.draw();
}

// 200ミリ秒ごとに実行
setInterval(continueRun, 200);