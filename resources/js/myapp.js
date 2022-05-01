// 犬を探すゲーム
const maps = [
    [1,1,1,1],
    [1,1,1,1],
    [1,2,1,1],
    [1,1,1,1]
];
let mapHTML = "";

for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps[i].length; j++) {
        mapHTML += "<input type='button' value=''>"
    }
    mapHTML += "<br>";
}

document.getElementById("result").innerHTML = mapHTML;
