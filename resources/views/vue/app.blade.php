<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Vue.jsの核の機能であるデータバインディング</title>
</head>
<body>
    <button id="b-button" v-bind:disabled="!canBuy">購入</button>
    
    <script src="{{ mix('js/app.js') }}"></script>
</body>
</html>