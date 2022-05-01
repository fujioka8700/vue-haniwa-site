// 2次元配列
let scores = [
    [10,20,30],
    [40,50,60],
    [70,80,90]
];

for (let i = 0; i < scores.length; i++) {
    for (let j = 0; j < scores.length; j++) {
        document.write(scores[i][j] + ', ');    
    }
}