<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
</head>
<body>

    <h1>성공적으로 전송이 완료 되었습니다.</h1>

    <ul class="response">
        <li>
            <div>
                <!-- input타입 : text(이름) -->
                <span>이름</span>
                <span><?php echo $_POST['irum'] ?></span> <!-- method가 post라서(get이면 GET씀), echo:서버에 뿌려라 -->
                
            </div>
        </li>
        <li>
            <div>
                <span>이메일</span>
                <span><?php echo $_POST['mail'] ?></span>
            </div>
        </li>
        <li>
            <div>
                <span>좋아하는 것</span>
                <span><?php echo $_POST['interested'] ?></span>
            </div>
        </li>
        <li>
            <div>
                <span>메시지</span>
                <span><?php echo $_POST['message'] ?></span>
            </div>
        </li>
    </ul>

</body>
</html>
