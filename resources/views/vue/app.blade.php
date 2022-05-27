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
        <ul>
            <li v-for="item in items" v-bind:key="item.name">
                @{{ item.name }}の個数: <input type="number" v-model="item.quantity" min="0">
            </li>
        </ul>
        <hr>
        <div v-bind:style="errorMessageStyle">
            <ul>
                <li v-for="item in items" v-bind:key="item.name">
                    @{{ item.name }}: @{{ item.price }} x @{{ item.quantity }} = @{{ item.price * item.quantity | numberWithDelimiter}}円
                </li>
            </ul>
            <p>@{{ items[0].name }}: @{{ items[0].price}} x @{{ items[0].quantity}}</p>
            <p>小計: @{{ totalPrice | numberWithDelimiter }}円</p>
            <p>合計(税込): @{{ totalPriceWithTax | numberWithDelimiter }}円</p>
            <p v-show="!canBuy">
                @{{ 1000 | numberWithDelimiter }}円以上からご購入いただけます
            </p>
            {{-- メソッドが押されたら、メソッドを呼び出す --}}
            <button v-on:click="doBuy">購入</button>
        </div>
    </div>
    
    <script src="{{ mix('js/app.js') }}"></script>
</body>
</html>