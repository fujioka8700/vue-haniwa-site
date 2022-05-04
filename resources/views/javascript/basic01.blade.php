<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Pragma" content="no-cache">
    <meta http-equiv="Cache-Control" content="no-cache">
    <title>DOM</title>
    <style>
        .tableClass {
            border: 1px solid #ff0000;
            border-collapse: collapse;
            width: 600px;
        }
        .tableClass td {
            border: 1px solid #ff0000;
        }
    </style>
</head>
<body>
    <input type="button" value="Create Table" onclick="doCreateTable()">
    <input type="button" value="Create Row" onclick="doCreateRow()">
    Rows:<input type="text" name="" id="row">
    Columns:<input type="text" name="" id="col">
    <br>
    <div id="div"></div>

    <script src="{{ mix('js/myapp.js') }}"></script>
</body>
</html>