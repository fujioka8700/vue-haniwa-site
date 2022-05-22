<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Vue.jsの核の機能であるデータバインディング</title>
    <style>
        .error {
            color: #ff0000;
        }
    </style>
</head>
<body>
    <div id="app">
        <p v-bind:style="{color: 'red'}">買い物</p>
        <p>@{{ items[0].name }}: @{{ items[0].price}} x @{{ items[0].quantity}}</p>
        <p>小計: @{{ totalPriceWithTax | numberWithDelimiter }}円</p>
        <p>合計(税込): @{{ totalPriceWithTax | numberWithDelimiter }}円</p>
        <p v-bind:class="errorMessageClass">
            @{{ 1000 | numberWithDelimiter }}円以上からご購入いただけます
        </p>
    </div>
    
    <script src="{{ mix('js/app.js') }}"></script>
</body>
</html>