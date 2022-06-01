<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Vue Routerを活用したアプリケーション開発</title>
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">
    <style>

    </style>
</head>
<body>
    <div id="app">
        <router-link to="/top">トップページ</router-link>
        <router-link to="/users">ユーザー一覧ページ</router-link>
        {{-- 上記の名前付きルートを呼び出すには<router-link> のtoパラメーターに指定する。 --}}
        <router-link v-bind:to="{ name:'user', params: { userId:123 }}">ユーザー詳細ページ</router-link>
        <router-view></router-view>
    </div>

    <script src="{{ mix('js/app.js') }}"></script>
</body>
</html>