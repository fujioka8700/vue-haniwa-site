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
    </style>
</head>
<body>
    <div id="app">
        <p>@{{ items[0].name }} @{{ items[0].price }} * @{{ items[0].quantity }}</p>
        <p>@{{ 1000 | numberWithDelimiter }}</p>
    </div>

    <script src="{{ mix('js/app.js') }}"></script>
</body>
</html>