<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Vue.jsの基本</title>
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">
    <style>
        .error {
            color: #ff0000;
        }
    </style>
</head>
<body>
    <div id="app">
        <p>@{{ count }}</p>
    </div>
    
    <script src="{{ mix('js/app.js') }}"></script>
</body>
</html>