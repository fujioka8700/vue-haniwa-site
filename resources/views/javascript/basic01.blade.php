<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Pragma" content="no-cache">
    <meta http-equiv="Cache-Control" content="no-cache">
    <title>JavaScriptの基本概念</title>
</head>
<body>
    <select name="prefectures" id="prefectures" onchange="doPrefecturesChange(this)">
        <option value="">--都道府県を選択--</option>
    </select>
    <select name="cities" id="cities">
        <option value="">--地名を選択--</option>
    </select>

    <script src="{{ mix('js/myapp.js') }}"></script>
</body>
</html>