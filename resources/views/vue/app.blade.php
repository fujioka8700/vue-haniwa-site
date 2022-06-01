<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Vue.js SPAのサンプルアプリケーション</title>
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">
    <style>

    </style>
</head>
<body>
    <div id="app">
        <nav>
            <router-link to="/top">トップページ</router-link>
            <router-link to="/users">ユーザー一覧</router-link>
        </nav>
        <router-view></router-view>
    </div>

    <script type="text/x-template" id="user-list">
        <div>
            <div v-if="loading">読み込み中...</div>
            <div v-if="error">
                @{{ error }}
            </div>
            <div v-for="user in users" :key="user.id">
                <h2>@{{ user.name }}</h2>
            </div>
        </div>
    </script>
    <script src="{{ mix('js/app.js') }}"></script>
</body>
</html>