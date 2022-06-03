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
        .v-enter-active,
        .v-leave-active {
        transition: opacity 1s;
        }
        .v-enter,
        .v-leave-to {
        opacity: 0;
        }
    </style>
</head>
<body>
    <div id="app">
        <p>
            <button @click="show=!show">切り替え</button>
            <button @click="cancel" :disabled="!anime">キャンセル</button>
            <span v-if="anime">アニメーション中</span>
          </p>
          <transition
            @before-enter="beforeEnter"
            @enter="enter"
            @after-enter="afterEnter"
            @enter-cancelled="enterCancelled"
            @before-leave="beforeLeave"
            @leave="leave"
            @after-leave="afterLeave"
            @leave-cancelled="leaveCancelled">
            <div v-if="show">Hello World!</div>
          </transition>
    </div>

    <script src="{{ mix('js/app.js') }}"></script>
</body>
</html>