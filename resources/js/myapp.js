// セカンダリリンケージドロップダウン

const prefecturesArray = [ "東京", "大阪" ];
const citiesArray = [
    [],
    ["原宿", "渋谷"],
    ["梅田", "心斎橋"]
]

window.onload = function() {
    const prefecturesObj = document.getElementById("prefectures");

    for (let i = 0; i < prefecturesArray.length; i++) {
        let option = document.createElement("option");
        option.text = prefecturesArray[i];
        option.value = prefecturesArray[i];
        
        prefecturesObj.options[prefecturesObj.options.length] = option;   
    }

    function doPrefecturesChange(obj) {
        let index = obj.selectedIndex;
        let citiesObj = document.getElementById("cities");
        citiesObj.options.length = 0;

        for (let i = 0; i < prefecturesArray.length; i++) {
            let option = document.createElement("option");
            option.text = citiesArray[index][i];
            option.value = citiesArray[index][i];
            
            citiesObj.options[citiesObj.options.length] = option;
        }
    }

    window.doPrefecturesChange = doPrefecturesChange;
}