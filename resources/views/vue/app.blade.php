<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Vue.jsの核の機能であるデータバインディング</title>
</head>
<body>
    <div id="app">
        <p>
            @{{ items[0].name }}: @{{ items[0].price }} x @{{ items[0].quantity }}
        </p>
    </div>
    
    <script src="{{ mix('js/app.js') }}"></script>
</body>
</html>