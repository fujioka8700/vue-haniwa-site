<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Pragma" content="no-cache">
    <meta http-equiv="Cache-Control" content="no-cache">
    <title>DOM</title>
    <style>
        div img{
            border: 1px solid #0000ff;
        }
    </style>
</head>
<body>
    <div id="div">
        <img src="images/animal_wallaby_kangaroo_s.png" alt="" id="image">
    </div>
    <input type="button" value="Remove Child" id="btn">

    <script src="{{ mix('js/myapp.js') }}"></script>
</body>
</html>