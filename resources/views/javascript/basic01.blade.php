<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Pragma" content="no-cache">
    <meta http-equiv="Cache-Control" content="no-cache">
    <title>DOM</title>
    <style>
        .smallFont {
            font-size: 12px;
            color: #ff0000;
        }
        .bigFont {
            font-size: 48px;
            font-weight: bold;
            color: #00ff00;
        }
    </style>
</head>
<body>
    
    <div id="div">
        CSSのクラスを変更します
    </div>
    <input type="button" value="フォントのクラスを変更" onclick="changeFont()">

    <script src="{{ mix('js/myapp.js') }}"></script>
</body>
</html>