// セカンダリリンケージドロップダウン
window.onload = function() {
    let countryObj = document.getElementById("country");

    let option = document.createElement("option");
    option.text = "United States";
    option.value = "United States";
    
    countryObj.options[countryObj.options.length] = option;
}