// ログインWebページ
window.addEventListener('keydown', (e) => {
    if (e.key == 'Enter') {
        checkLogin();
    }
});

function checkLogin() {
    let usernameObj = document.getElementById("username");
    let passwordObj = document.getElementById("password");

    if (usernameObj.value == "") {
        alert("Usernameを入力してください。");
        return;
    }

    if (passwordObj.value == "") {
        alert("Passwordを入力してください。");
        return;
    }

    alert("ログインできました");
}

window.checkLogin = checkLogin;