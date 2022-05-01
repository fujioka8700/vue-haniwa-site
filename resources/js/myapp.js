// クラス
function Caculator() {
    this.add = function(a, b) {
        return a + b;
    }

    this.sub = function(a, b) {
        return a - b;
    }

    this.multiply = function(a, b) {
        return a * b;
    }

    this.division = function(a, b) {
        return a / b;
    }
}

let cal = new Caculator();

let result = cal.add(4, 2);
document.write(result);

document.write("<br>");

result = cal.sub(4, 2);
document.write(result);

document.write("<br>");

result = cal.multiply(4, 2);
document.write(result);

document.write("<br>");

result = cal.division(4, 2);
document.write(result);