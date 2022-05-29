<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>コンポーネントの基礎</title>
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">
    <style>
    .header {
        width: 100%;
        border: 1px solid #d3d3d3;
        background-color: #f1f1f1;
        padding: 30px 15px;
    }
    .content li {
        width: 100%;
        border: 1px solid #d3d3d3;
        background-color: #fff;
        text-align: left;
        padding: 30px 15px;
        list-style: none;
    }
    </style>
</head>
<body>
    <div id="fruits-list">
        <page-header class="header">
            <h1 slot="header">冬の果物</h1>
        </page-header>
        <page-content class="content">
            <ul slot="content">
                <li>りんご</li>
                <li>イチゴ</li>
            </ul>
        </page-content>
    </div>

    <script src="{{ mix('js/app.js') }}"></script>
</body>
</html>