function doClick() {
    let divObj = document.getElementById("username");
    let value = divObj.value;
    alert(value);
}

window.doClick = doClick;