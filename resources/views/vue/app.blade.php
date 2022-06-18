<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Vue.js復習</title>
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">
    <style>
        [v-cloak] {
            display: none; /* テンプレートのマスタッシュを非表示にする */
        }
        table tr, th, td{
            border-collapse: collapse;
            border:1px solid #333;
        }
    </style>
</head>
<body>
    <div id="app">
        <div v-for="fruit in fruitsItems" :key="fruit.name">
            @{{ fruit.name }}
            <counter-button @increment="incrementCartStatus"></counter-button>
        </div>
        <p>合計：@{{ total }}個</p>
    </div>

    <script src="{{ mix('js/app.js') }}"></script>
</body>
</html>