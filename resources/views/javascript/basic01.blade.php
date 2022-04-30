<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Box</title>
    <style>
        .menubtn {
            background-color: #000000;
            color: white;
            padding: 16px;
            font-size: 16px;
            border: none;
            cursor: pointer;
        }
        .menudown-content {
            display: none;
            background-color: #f9f9f9;
            width: 300px;
        }
        .menudown-content a {
            color: black;
            display: block;
            text-decoration: none;
            padding: 12px 16px;
        }
        .menudown-content a:hover {
            background-color: #f1f1f1;
        }
        .menudown:hover .menudown-content {
            display: block;
        }
    </style>
</head>
<body>
    <div class="menudown">
        <button class="menubtn">Books</button>
        <div class="menudown-content">
            <a href="#">HTML, CSSの本</a>
            <a href="#">JavaScriptの本</a>
            <a href="#">Javaの本</a>
        </div>
    </div>
</body>
</html>