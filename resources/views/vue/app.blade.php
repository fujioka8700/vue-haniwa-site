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
    <div id="fruits-counter">
        {{-- カスタムイベントをv-onで補足 --}}
        <div v-for="fruit in fruitsItems">
            @{{ fruit.name }}: <counter-button v-on:increment="incrementCartStatus"></counter-button>
        </div>
        <p>合計: @{{ total }}個</p>
    </div>

    <script src="{{ mix('js/app.js') }}"></script>
</body>
</html>