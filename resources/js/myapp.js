// 犬を探すゲーム
const maps = [
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
];
let mapHTML = "";

for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps[i].length; j++) {
        maps[i][j] = Math.floor(Math.random() * 2) + 1;
    }
}

for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps[i].length; j++) {
        mapHTML += "<input type='button' value='' onclick='doButtonClick(this, " + maps[i][j] + ")'>"
    }
    mapHTML += "<br>";
}

document.getElementById("result").innerHTML = mapHTML;

function doButtonClick(obj, value) {
    if (value == 1) {
        obj.value = "*"; 
    }

    if (value == 2) {
        obj.value = "Dog"; 
    }
}

window.doButtonClick = doButtonClick;