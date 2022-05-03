<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Pragma" content="no-cache">
    <meta http-equiv="Cache-Control" content="no-cache">
    <title>DOM</title>
    <style>
        div img{
            border: 1px solid #0000ff;
        }
    </style>
</head>
<body>
    <div id="div">
        JavaScriptでDOM操作!!
    </div>
    <input type="button" value="Replace Child Node" onclick="doReplaceChild()">

    <script src="{{ mix('js/myapp.js') }}"></script>
</body>
</html>