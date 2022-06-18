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
        .header {
            width: 100%;
            border: 1px solid #d3d3d3;
            background-color: #f1f1f1;
            padding: 30px 15px;
        }
        .content {
            width: 100%;
            border: 1px solid #d3d3d3;
            background-color: #fff;
            text-align: left;
            padding: 30px 15px;
            list-style-type: none;
        }
    </style>
</head>
<body>
    <div id="app">
        <user-login @login="login"></user-login>    
    </div>

    <script src="{{ mix('js/app.js') }}"></script>
</body>
</html>