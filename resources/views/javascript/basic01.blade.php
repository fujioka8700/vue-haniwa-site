<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Box</title>
    <style>
        #login {
            border: 1px solid #cccccc;
            width: 250px;
            border-radius: 8px;
            padding: 15px;
            font-family: "Times New Roman", Times, serif;
        }
        #login div {
            line-height: 30px;
        }
        .textbox {
            width: 160px;
        }
        #buttonDiv {
            text-align: center;
        }
        #buttonDiv input {
            border: 1px solid #cccccc;
            background-color: #ffffff;
        }
    </style>
</head>
<body>
    <div id="login">
        <div>Username:<input class="textbox" type="text" name="username" id="username"></div>
        <div>Password:<input class="textbox" type="password" name="password" id="password"></div>
        <div id="buttonDiv">
            <input type="button" value="Login">
            <input type="button" value="Close">
        </div>
    </div>
</body>
</html>