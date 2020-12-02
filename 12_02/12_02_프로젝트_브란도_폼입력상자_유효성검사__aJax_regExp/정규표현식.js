//유효성 검사




//정규 표현식(RegExp)
//한글, 영문, 숫자 체크 기본활용
//이메일 상자 입력시 한글이 입력되면 바로 삭제 자동하는 하는 프로그래밍
//키보드가 글자를 입력 후 키가 다운(keydown)됐다가 올라올 때(keyup)
$('#mail').on({
    keyup:  function(){
        // var 변수 = /정규표현식 한글 자모받침글자 or | 파이프  /;
        // var 변수 = /[조건]/;
        // test() 유효성 검사 메서드
        var hangul = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;//한글체크
        
        if( hangul.test( $(this).val() ) ){
            $(this).val('');
            alert('한글은 입력이 안됩니다.');
        }
    }
});

$('#irum').on({
    keyup:  function(){
        var english = /[A-Za-z]/; //영문체크
        if( english.test( $(this).val() ) ){
            $(this).val('');
            alert('영문은 입력이 안됩니다.');
        }
    }
});

$('#message').on({
    keyup:  function(){
        var number = /[A-Za-z0-9]/;//영문, 숫자 체크
        if( number.test( $(this).val() ) ){
            $(this).val('');
            alert('영문과 숫자는 입력이 안됩니다.');
        }
    }
});





//정규 표현식(RegExp) 이메일 체크 
//moonjong@naver.com
//moonjong@hanmail.net
//moonjong@yahoo.co.kr

//조건 첫번째 맨 앞글자(첫 글자)는 반드시 영문/숫자[a-zA-Z0-9]로 시작(^)하고
//※ [^a-zA-Z]  영문이 아닌 것 (부정문) 대괄호 안에는 부정 ~ 아닌것
//※ ^[a-zA-Z]  첫 글자가 영문으로 시작하는 것 대괄호 밖에는 첫 글자의 의미

//조건 마지막은 반드시 영문[a-zA-Z] 2글자에서 3글자{2,3}로 끝($)남.
//※ 특수문자   * : 0 이상 반복
//※ 특수문자   + : 1 이상 반복
//※ 특수문자   ? : 0 또는 1개의 문자 매칭
//※ 특수문자   . : 정확히 1개 문자 매칭

//※ 종결어미   /i : 대소문자 구분 안함.
//※ 종결어미   /g : 전역대칭 

//moonjong          @yahoo               .co.kr
//                 필요조건m-jong2                @yahoo 필요조건  .co        .kr 필요조건 /대소문자 무시

/*
이메일 예문
moonjong@yahoo.co.kr

/ 
^[a-zA-Z0-9]

([-_.]?[a-zA-Z0-9])*   

@[a-zA-Z0-9]

([.]?[a-zA-Z])*

.[a-zA-Z]{2,3}$

/i;

*/


var regExpMail = /^[a-zA-Z0-9]([-_.]?[a-zA-Z0-9])*@[a-zA-Z0-9]([.]?[a-zA-Z])*.[a-zA-Z]{2,3}$/i;
console.log('유효성검사', regExpMail.test($('#mail').val()) );

if(  regExpMail.test($('#mail').val())){
    alert('이메일 유효성 검사 통과');
    $('#mail').removeClass('addError');                                
}
else{
    alert('이메일 유효성 검사 오류 발생');
    $('#mail').addClass('addError'); //에러 메시지를 색상으로       
}


//이름 유효성검사
//g 전체(전역대칭)
var regExpIrum = /[^a-zA-Z|ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/; //영문과한글이 아니면 입력 오류 
if( regExpIrum.test($('#irum').val()) === false ){
    console.log('이름 유효성검사', regExpIrum.test( $('#irum').val() ) );
    alert('이름 유효성 검사 통과');                                    
}
else{  //true
    console.log('이름 유효성검사', regExpIrum.test( $('#irum').val() ) );
    alert('이름 유효성 검사 오류');
    return false; //전송버튼 클릭을 취소

}
