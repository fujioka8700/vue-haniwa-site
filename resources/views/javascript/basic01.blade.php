<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Box</title>
    <style>
        ul {
            list-style-type: none;
            width: 300px;
            margin: 0;
            padding: 0;
            background-color: #eeeeee;
        }
        li a {
            display: block;
            color: #000000;
            padding: 8px 16px;
            text-decoration: none;
        }
        li a.active {
            background-color: #075272;
            color: white;
        }
        li a:hover:not(.active) {
            background-color: #59c9f9;
            color: white;
        }
    </style>
</head>
<body>
    <div id="box">
        <ul>
            <li><a class="active" href="#">ワラビーの種類</a></li>
            <li><a href="#">アカクビワラビー</a></li>
            <li><a href="#">パルマワラビー</a></li>
            <li><a href="#">シマワラビー</a></li>
        </ul>
    </div>
</body>
</html>