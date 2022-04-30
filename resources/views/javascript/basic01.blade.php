<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Box</title>
    <style>
        ul {
            list-style-type: none;
            width: 100%;
            overflow: hidden;
            margin: 0;
            padding: 0;
            background-color: #333;
        }
        li {
            float: left;
        }
        li a {
            display: block;
            color: #ffffff;
            text-align: center;
            padding: 15px;
            text-decoration: none;
        }
        li a.active {
            background-color: #fde352;
        }
        li a:hover:not(.active) {
            background-color: #fde352;
        }
    </style>
</head>
<body>
    <div id="box">
        <ul>
            <li><a class="active" href="#">HTML</a></li>
            <li><a href="#">CSS</a></li>
            <li><a href="#">JavaScript</a></li>
            <li><a href="#">Python</a></li>
        </ul>
    </div>
</body>
</html>