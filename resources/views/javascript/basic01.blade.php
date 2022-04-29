<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>absolute Box</title>
    <style>
        .redBox {
            border: 1px solid #cccccc;
            width: 200px;
            height: 200px;
            text-align: center;
            border-radius: 8px;
            background-color: #ff0000;
            position: absolute;
            top: 0px;
            left: 0px;
        }
        .greenBox {
            border: 1px solid #cccccc;
            width: 200px;
            height: 200px;
            text-align: center;
            border-radius: 8px;
            background-color: #00ff00;
            position: absolute;
            top: 10px;
            left: 10px;
        }
        .blueBox {
            border: 1px solid #cccccc;
            width: 200px;
            height: 200px;
            text-align: center;
            border-radius: 8px;
            background-color: #0000ff;
            position: absolute;
            top: 20px;
            left: 20px;
        }
    </style>
</head>
<body>
    <div class="redBox">
        
    </div>
    <div class="greenBox">
        
    </div>
    <div class="blueBox">

    </div>
</body>
</html>