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
        {{-- リンク先を`to`属性に指定する --}}
        {{-- デフォルトで <router-link> は`<a>`タグとしてレンダリングする --}}
        <router-link to="/top">トップページ</router-link>
        <router-link to="/users">ユーザー一覧ページ</router-link>
        {{-- ルート定義で書いたコンポーネントを実際に反映させる要素：<router-view> --}}
        <router-view></router-view>
    </div>

    <script src="{{ mix('js/app.js') }}"></script>
</body>
</html>