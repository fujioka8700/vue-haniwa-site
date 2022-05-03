<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Pragma" content="no-cache">
    <meta http-equiv="Cache-Control" content="no-cache">
    <title>JavaScriptの基本概念</title>
</head>
<body>
    Username:<input type="text" name="username" id="username"><br>
    Password:<input type="text" name="password" id="password"><br>
    <input type="button" value="Login" onclick="checkLogin()">
    
    <script src="{{ mix('js/myapp.js') }}"></script>
</body>
</html>