<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Box</title>
    <style>
        #box {
            border: 1px solid #cccccc;
            width: 250px;
            border-radius: 8px;
            padding: 15px 15px 15px 15px;
            font-size: 16px;
            font-family: "Times New Roman", Times, serif;
        }
        #box ul li {
            list-style: none;
            background: url('images/monster01-icon.png') no-repeat left;
            padding: 0 0 0 30px;
            margin-bottom: 10px;
            /* list-style-image: url('images/monster01-icon.png'); */
        }
        #box ul li a:link {
            color: #000000;
            text-decoration: none;
        }
        #box ul li a:hover {
            color: #0000ff;
        }
        #box ul li a:active {
            color: #ff0000;
        }
    </style>
</head>
<body>
    <div id="box">
        <ul>
            <li><a href="#">アカクビワラビー</a></li>
            <li><a href="#">パルマワラビー</a></li>
            <li><a href="#">シマワラビー</a></li>
        </ul>
    </div>
</body>
</html>