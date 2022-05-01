<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScriptの基本概念</title>
    <script src="{{ mix('js/myapp.js') }}"></script>
</head>
<body>
    a:<input type="text" id="a">
    b:<input type="text" id="b">
    =
    <span id="result"></span>
    <br>
    <input type="button" value="+" onclick="doAdd()">
    <input type="button" value="-" onclick="doSub()">
    <input type="button" value="*" onclick="doMultiply()">
    <input type="button" value="/" onclick="doDivide()">
</body>
</html>