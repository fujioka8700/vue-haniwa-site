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
        <fruits-list></fruits-list>
        <fruits-list-description></fruits-list-description>
        <fruits-list-table></fruits-list-table>
    </div>

    <script src="{{ mix('js/app.js') }}"></script>
</body>
</html>