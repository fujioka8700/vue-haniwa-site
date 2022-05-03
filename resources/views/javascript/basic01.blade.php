<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Pragma" content="no-cache">
    <meta http-equiv="Cache-Control" content="no-cache">
    <title>DOM</title>
    <style>
        .over {
            background-color: #ff0000;
        }
        .down {
            background-color: #0000ff;
        }
        table {
            border: 1px solid #eeeeee;
            width: 400px;
            border-collapse: collapse;
        }
        table th {
            border: 1px solid #eeeeee;
            background: #cccccc;
        }
        table td {
            border: 1px solid #eeeeee;
        }
    </style>
</head>
<body>
    <table>
        <tr>
            <th>Username</th><th>Password</th>
        </tr>
        <tr onmouseover="doOver(this)" onmouseout="doOut(this)" onmousedown="doDown(this)">
            <td>admin</td><td>1111</td>
        </tr>
        <tr onmouseover="doOver(this)" onmouseout="doOut(this)" onmousedown="doDown(this)">
            <td>sato</td><td>2222</td>
        </tr>
        <tr onmouseover="doOver(this)" onmouseout="doOut(this)" onmousedown="doDown(this)">
            <td>suzuki</td><td>3333</td>
        </tr>
    </table>

    <script src="{{ mix('js/myapp.js') }}"></script>
</body>
</html>