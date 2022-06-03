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
        <my-page>
            {{-- 名前付きスロット --}}
            <h1 slot="header">カービィ</h1>
            {{-- 単一スロット --}}
            <p>ピンクで小さく丸い姿をしている。漫画ではピンク玉と呼ばれている。身長は20センチメートル程度。まん丸の胴体に短い手足、胴体と手はピンクで足は赤い。他の登場キャラクターたちは、大きさを比較する際、このカービィの身長が元とされ、公式ではマシュマロ程の柔らかさとされている。</p>
            <p slot="footer">任天堂・ハル研究所</slot>
        </my-page>
    </div>

    <script src="{{ mix('js/app.js') }}"></script>
</body>
</html>