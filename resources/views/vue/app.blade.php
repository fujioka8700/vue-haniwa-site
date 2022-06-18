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
        <page-header class="header">
            <h1 slot="header">夏の果物</h1>
        </page-header>
        <ul>
            <fruits-items class="content" v-for="fruit in fruitsItems" :fruit-item="fruit" :key="fruit.name"></fruits-items>
        </ul>
        <page-footer>
            <p slot="footer">©果物屋</p>
        </page-footer>
    </div>

    <script src="{{ mix('js/app.js') }}"></script>
</body>
</html>