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
        {{-- 1000円以上になるまで、赤く表示する --}}
        <div :style="errorMessageStyle">
            <p>@{{ items[0].name }}: @{{ items[0].price}} x @{{ items[0].quantity}}</p>
            <p>小計: @{{ totalPrice | numberWithDelimiter }}円</p>
            <p>合計(税込): @{{ totalPriceWithTax | numberWithDelimiter }}円</p>
            <p v-show="!canBuy">
                @{{ 1000 | numberWithDelimiter }}円以上からご購入いただけます
            </p>
        </div>
    </div>
    
    <script src="{{ mix('js/app.js') }}"></script>
</body>
</html>