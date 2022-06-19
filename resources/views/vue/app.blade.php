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
        <router-link to="/top">トップページ</router-link>
        <router-link to="/users">ユーザー一覧ページ</router-link>
        <router-link :to="{ name: 'user', params: { userId: 123 }}">ユーザー詳細ページ</router-link>
        <button @click="userBtn">ボタン</button>
        <router-view></router-view>
    </div>

    <script src="{{ mix('js/app.js') }}"></script>
</body>
</html>