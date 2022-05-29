<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>コンポーネントの基礎</title>
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">
    <style>

    </style>
</head>
<body>
    <div id="login-example">
        <user-login></user-login>
    </div>

    <script type="text/x-template" id="login-template">
        <div id="login-template">
            <div>
                <input type="text" placeholder="ログインID" v-model="userid">
            </div>
            <div>
                <input type="password" placeholder="パスワード" v-model="password">
            </div>
            <button v-on:click="login">ログイン</button>
        </div>
    </script>
    <script src="{{ mix('js/app.js') }}"></script>
</body>
</html>