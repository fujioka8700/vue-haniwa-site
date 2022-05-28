<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>コンポーネントの基礎</title>
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">
    <style>
    table {
        border-collapse: collapse;
    }
    table, th, td {
        border: 1px #000 solid;
    }
    </style>
</head>
<body>
    <div id="fruits-list">
        <div>
            <fruits-list-title></fruits-list-title>
        </div>
    </div>
    
    <script type="text/x-template" id="fruits-list-title">
        <h1>フルーツ一覧</h1>
    </script>
    <script src="{{ mix('js/app.js') }}"></script>
</body>
</html>