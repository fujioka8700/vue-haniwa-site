<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>高度な機能</title>
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">
    <style>
        [v-cloak] {
            display: none;
        }
        /* fadeトランジッションの実装 */
        .v-enter-active,
        .v-leave-active {
            transition: opacity 500ms ease-out;
        }
        .v-enter {
            opacity: 0;
        }
        .v-enter-to {
            opacity: 1;
        }
        .v-leave {
            opacity: 1;
        }
        .v-leave-to {
            opacity: 0;
        }
    </style>
</head>
<body>
    <div id="app">
        <button v-on:click="isShown = !isShown">表示の切り替え</button>
        <transition>
            <p v-show="isShown">Hello, world</p>
        </transition>
    </div>

    <script src="{{ mix('js/app.js') }}"></script>
</body>
</html>