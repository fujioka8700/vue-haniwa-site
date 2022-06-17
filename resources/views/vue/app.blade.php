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
    </style>
</head>
<body>
    <div id="app">
        <ul>
            <li v-for="item in items" :key="item.name">
                @{{ item.name }} の個数
                <input type="number" v-model.lazy="item.quantity" min="0">
            </li>
        </ul>
        <div :style="errorMessageStyle">
            <ul>
                <li v-for="item in items" :key="item.name">
                    @{{ item.name }} @{{ item.price }} x @{{ item.quantity }} = @{{ item.price * item.quantity | numberWithDelimiter }}
                </li>
            </ul>
            <p>小計：@{{ totalPrice | numberWithDelimiter }} 円</p>
            <p>合計：@{{ totalPriceWithTax | numberWithDelimiter }} 円</p>
            <p v-show="!canBuy">
                @{{ minimumPrice | numberWithDelimiter }} 円以上からご購入いただけます
            </p>
            <button :disabled="!canBuy" @click="doBuy">購入</button>
        </div>
    </div>

    <script src="{{ mix('js/app.js') }}"></script>
</body>
</html>