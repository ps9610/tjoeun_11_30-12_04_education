<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
</head>
<body>
    <h1>성공적으로 정보를 전달하였습니다!</h1>
    <ul>
        <li>
            <div>
                <span>이름</span>
                <span><?php echo $_POST["irum"] ?></span>
            </div>
        </li>
        <li>
            <div>
                <span>이메일</span>
                <span><?php ehco $_POST["mail"] ?></span>
            </div>
        </li>
        <li>
            <div>
                <span>선호하는 것</span>
                <span><?php ehco $_POST["interested"]?></span>
            </div>
        </li>
        <li>
            <div>
                <span>메시지</span>
                <span><?php echo $_POST["message"]?></span>
            </div>
        </li>
    </ul>
</body>
</html>