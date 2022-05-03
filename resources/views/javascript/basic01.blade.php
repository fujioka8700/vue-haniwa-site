<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Pragma" content="no-cache">
    <meta http-equiv="Cache-Control" content="no-cache">
    <title>DOM</title>
    <style>
        .open {
            display: block;
        }
        .close {
            display: none;
        }
        #div1 {
            border: 1px solid #ff0000;
            width: 300px;
            height: 30px;
            text-align: right;
        }
        #div2 {
            width: 300px;
            border: 1px solid #00ff00;
        }
    </style>
</head>
<body>
    <div id="div1" onclick="change()">
        クリックしてね
    </div>
    <div id="div2">
        <ul>
            <li>スタイルフォント</li>
            <li>クラスセレクターの変更</li>
            <li>オーバーフローの展開と終了</li>
        </ul>
    </div>

    <script src="{{ mix('js/myapp.js') }}"></script>
</body>
</html>