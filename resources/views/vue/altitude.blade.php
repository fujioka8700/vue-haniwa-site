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
    </style>
</head>
<body>
    <div id="app">
        <my-button href="https://vuejs.org">anchor</my-button>
        <my-button tag="span">span</my-button>
        <my-button>button</my-button>
    </div>

    <script src="{{ mix('js/app.js') }}"></script>
</body>
</html>