<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Pragma" content="no-cache">
    <meta http-equiv="Cache-Control" content="no-cache">
    <title>DOM</title>
    <style>
        
    </style>
</head>
<body>

    <a href="javascript:void(0)" onclick="addContact()">Add Contact</a>
    <div id="div">
        <div id="contact">
            Name:<input type="text" name="user">
            Telephone:<input type="text" name="telephone">
            <a href="javascript:void(0)" onclick="deleteNode(this)">Delete</a>
        </div>
    </div>

    <script src="{{ mix('js/myapp.js') }}"></script>
</body>
</html>