// セカンダリリンケージドロップダウン

const countryArray = [ "China", "United States" ];

window.onload = function() {
    let countryObj = document.getElementById("country");

    for (let i = 0; i < countryArray.length; i++) {
        let option = document.createElement("option");
        option.text = countryArray[i];
        option.value = countryArray[i];
        
        countryObj.options[countryObj.options.length] = option;   
    }
}