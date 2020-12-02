// 유효성 검사

// 정규 표현식
    // RegExp 생성자를 사용한다.
        // regExp 생성자 : 패턴을 사용해 텍스트를 판별할 때 사용
    // 즉 정규 표현식은, 문자열에 나타나는 특정 문자 조합과 대응시키기 위해 사용
    // 보통 정규식이라고 줄여서 표현하며 가장 흔하게는 정규식 리터럴을 사용한다.
    // 한글, 영문, 숫자를 체크할 때 기본적으로 활용한다.

// 본격 정규식 전 연습
    // 정규식 코드
        // var 변수 = /정규표현식 한글 자모받침글자 or | 파이프  /;
        // var 변수 = /[조건]/;
            // 1.슬래쉬 두번 세미콜론
            // 2. 대괄호
        // test() 유효성 검사 메서드

    $('#mail').on({
        keyup:  function(){
        // 키보드가 글자를 입력 후 키가 다운(keydown)됐다가 올라올 때(keyup)
        var hangul = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/; //한글체크
        
        // test() 유효성 검사 메서드
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


// 우리가 사용할 정규 표현식
    // 이메일 상자 입력시 한글이 입력되면 바로 삭제 자동하는 하는 프로그래밍

//정규 표현식(RegExp)에 사용할 이메일 형식 체크 
    //sohye@naver.com
    //sohye@hanmail.net
    //sohye@yahoo.co.kr

// 조건 첫번째. 맨 앞글자(첫 글자)는 반드시 영숫자[a-zA-Z0-9]로 시작(^)
//조건 마지막은 반드시 영문[a-zA-Z] 2글자에서 3글자{2,3}로 끝($)
    // 삿갓(^), 달러($) = 타입속성


//📌 특수문자  {...} : 반복되는 횟수를 지정함
            // ㄴ> 마지막의 중괄호는 범위를 표현;2글자에서 3글자 사이니까 {2,3}
            // ㄴ> 만약 2글자만 가능하다 라고 하면 {2} 만 쓰면 됨
//📌 특수문자  ^ : 문자열이 삿갓 다음 문자로 시작
//📌 특수문자  $ : 문자열이 달러 전의 문자로 끝
    // ㄴ> ❗ 삿갓이 대괄호 안에 있고 밖에 있고의 차이가 있음 ❗
        // ㄴ> [^a-zA-Z] 영문이 아닌 것(부정문);대괄호 안에는 부정 = ~ 아닌것;
        // ㄴ> ^[a-zA-Z] 첫 글자가 영문으로 시작하는 것;대괄호 밖의 삿갓은 첫 글자의 의미

//📌 특수문자   * : 0번 이상 반복
                    //a* : a가 0번 이상 반복
//📌 특수문자   + : 1번 이상 반복
                    //a+ : a가 1번 이상 반복
//📌 특수문자   ? : 0 또는 1개의 문자 매칭
                    //a? : a가 존재하거나 존재하지 않음
//📌 특수문자   . : 정확히 1개 문자 매칭
//.a : 임의로 한 문자 표현(a가 마지막으로 끝)
//📌 특수문자   \w : 
//📌 플래그     종결어미 /i : 검색 패턴 비교 시 대소문자 구분 안함.
//📌 플래그     종결어미 /g : 전역대칭;검색 패턴 비교 시 일치하는 모든 부분 선택

//💡 정규 표현식 특수 문자 예시
/*
 /.ap/         // 문자열 "ap" 앞에 임의의 한 문자가 등장하는 문자열 : aap, bap, cap, @ap, #ap, ...

/a?b/         // b 앞에 a가 0번 또는 1번 등장하는 문자열 : b, ab
/a*b/         // b 앞에 a가 0번 이상 등장하는 문자열 : b, ab, aab, aaab, ...

/a+b/         // b 앞에 a가 1번 이상 등장하는 문자열 : ab, aab, aaab, aaaab, ...
/a{2,4}b/     // b 앞에 a가 2번 이상 4번 이하 등장하는 문자열 : aab, aaab, aaaab
/a{2,}b/      // b 앞에 a가 2번 이상 등장하는 문자열 : aab, aaab, aaaab, aaaaab, ...

/^abc/        // abc로 시작하는 문자열 : abc, abcd, abcdef, ...

/abc$/        // abc로 끝나는 문자열 : abc, zabc, xyzabc, ...

/abc|def|ghi/ // abc, def 또는 ghi 중 하나의 문자열

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

/*
이메일 예문
moonjong@yahoo.co.kr

/ 
^[a-zA-Z0-9] : 맨 앞에는 소문자, 대문자, 숫자가 올 수 있음

([-_.]?[a-zA-Z0-9])* : 

@[a-zA-Z0-9]

([.]?[a-zA-Z])*

.[a-zA-Z]{2,3}$

/i;

*/

// hello_9610@naver.com
//           hello                                      _9610                        @naver                      .com               /i;
//^[a-zA-Z0-9] 영문대소문자 구별 안함 ([-_.]?[a-zA-Z0-9])* 올수도있고 안올수도있음 @[a-zA-Z0-9]필수조건 [a-zA-Z]{2,3}$ 필수조건 대소문자구별안함

//                     sohye_9610(필요조건)           @gmail(필요조건)  .co          .kr(필요조건)    i는 대소문자 무시
/* var regExpEmail = /^[a-zA-Z0-9]([-_.]?[a-zA-Z0-9])*@[a-zA-Z-0-9]   ([.]?[a-zA-Z])*.[a-zA-Z]{2,3}$/i; //마침표는 gmail.com naver.com할 때 그 마침표!!
                                // ㄴ> 하이폰이나 언더바나 점이 온다 -> _9610 */


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