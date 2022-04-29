<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Box</title>
    <style>
        .box {
            border: 1px solid #cccccc;
            width: 250px;
            border-radius: 8px;
            padding: 15px 15px 15px 15px;
        }
        #imgBox {
            width: 100%;
        }
        #textBox {
            text-align: center;
            width: 100%;
            line-height: 30px
        }
    </style>
</head>
<body>
    <div class="box">
        <div id="imgBox">
            <img src="{{ asset('images/animal_wallaby_kangaroo_s.png') }}" alt="ワラビー">
        </div>
        <div id="textBox">
            あの有名なワラビーです。
        </div>
    </div>
</body>
</html>