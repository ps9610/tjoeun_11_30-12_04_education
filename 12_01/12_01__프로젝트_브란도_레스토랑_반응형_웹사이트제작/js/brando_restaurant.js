;(function(window,document,$,undefined){ //항상 밑에서 위로 보기(업데이트 항목은 위로 써줌)
    
    var brando = {
        init:           function(){ 
            var that=this;

                that.headerFn();
                that.section01Fn();
                that.section234Fn();
                /* 
                that.section234Fn(); 
                 =  that.section02Fn();
                    that.section03Fn();
                    that.section04Fn();
                */
                that.section05Fn();
                that.section06Fn();
                that.section07Fn();
                that.section08Fn();
                that.section09Fn();
                that.section09GalleryFn();
                that.section10Fn();
                that.section11Fn();
                that.section12Fn();
                that.section13Fn();
                that.section14Fn();
                that.footerFn();
        },//브란도에서 최초 실행될 js

        headerFn:       function(){ 
            var smoothBtn = $(".smooth-btn"); //웹 전체 공통 클래스
            var htmlBody = $("html,body");
            var mobileMenu= $("#header .mobile-menu");
            var mobileBtn = $("#header .mobile-btn");
            var window_ = $(window);
            var header = $("#header");
            var goTop = $(".goTop"); //웹 전체 공통 클래스
            
            var winW = window_.width();

            var url = null; 
            var t = 0;

            //Smooth Scrolling Event : <a href= #해시태그 가져와서 부드럽게 해당 섹션으로 이동
            smoothBtn.on({ 
                click : function(event){
                    var that = $(this);
                    
                    event.preventDefault();
                    url = that.attr("href");
                    htmlBody.stop().animate({ scrollTop: $( url ).offset().top },800); 
                    t=0; // 초기화
                    mobileMenu.stop().animate({ right:-100+"%" },0);//처음화면처럼 초기화되어야하니까 0초 사이에 -100으로 가게 해야함 = 초기화
                    mobileBtn.removeClass("addClose");
                }
            });

            //scrolling
            window_.scroll(function(){
                if( window_.scrollTop()>=30 ){
                    header.addClass("addMobile");
                    goTop.addClass("addGotop");
                }
                else{
                    header.removeClass("addMobile");
                    goTop.removeClass("addGotop");
                }
            });

            //resize
            window_.resize(function(){
                winW = window_.width();
                if( winW>990 ){
                    t=0;
                    mobileBtn.removeClass("addClose");
                    mobileMenu.stop().animate({ right:-100+"%" },400); // 여기서 다시 초기화해줘서 if만 쓰면 됨 
                }
            });

            // 만약 smoothBtn에 mobileMenu.hide()를 쓰려면 
            // mobileBtn.on({
            //     click:   function(e){
            //         e.preventDefault();
            //         var that = $(this);
            //         var x = null;
            //             x = that.hasClass("addClose");
            //             if( x==false ){
            //                 x==true;
            //                 that.addClass("addClose");
            //                 mobileMenu.stop().animate({right:0},400);
            //                 mobileMenu.show();
            //             }
            //             else if( x==true ){
            //                 x==false;
            //                 that.removeClass("addClose");
            //                 mobileMenu.stop().animate({right:-100+"%"},400);
            //                 mobileMenu.hide();
            //             }
            //             console.log(x)
            //     }
            // });
    

            // btn-click event

            mobileBtn.on({
                click : function(event){
                    var that = $(this);
                    
                    event.preventDefault();
                    that.toggleClass("addClose");
                    if(t==0){
                        t=1;
                        mobileMenu.stop().animate({right:0},400);
                    }
                    else if(t==1){
                        t=0;
                        mobileMenu.stop().animate({right:-100+"%"},400);
                    }
                    console.log(t);
                }
            });

        },//헤더의 js

        section01Fn:    function(){
            
            var n = $("#section01 .slide").length-1; // 슬라이드 전체 갯수, 슬라이드 추가/삭제할때마다 변경하기 싫어서, index번호는 0부터 시작하니까 -1해주기
            var cnt = 0;

            var slide = $("#section01 .slide")
            var arrowDownBtn = $("#section01 .arrow-down-btn")
            var section01 = $("#section01")
            var hungry = $("#section01 .hungry")
            var window_ = $(window) // var window라고 쓰면 예약 식별자인 window가 됨으로 _붙여줌
            var htmlBody = $("html,body")
            var section02 = $("#section02")
            
            //console.log( "섹션1 객체", section01 )

            var winH = 969;
            var imgH =hungry.height();
            var imgTop = (winH-imgH)/2;
    
            setTimeout(resizeFn,100);

            function resizeFn(){                
                winH = window_.height();
                section01.css({ height:winH });
                
                imgH = hungry.height();
                imgTop = (winH-imgH)/2;
               hungry.css({ top:imgTop });
            };

            //Smooth Scrolling Event
            arrowDownBtn.on({
                click : function(){
                    htmlBody.stop().animate({ scrollTop : section02.offset().top},700);
                }
            });

            window_.resize(function(){
                resizeFn();
            });

            setInterval(nextCountFn,3000);
            
            //메인 NEXT 슬라이드
            function mainNextSlideFn(){
                slide.css({ zIndex:1 }).stop().animate({opacity:1},0);
                slide.eq(cnt==0? n:cnt-1).css({ zIndex:2 });
                slide.eq(cnt).css({ zIndex:3 }).stop().animate({opacity:0},0).animate({opacity:1},800);
                //console.log("next",cnt);
                }

            //메인 PREV 슬라이드
            function mainPrevSlideFn(){
                slide.css({ zIndex:1 }).stop().animate({opacity:1},0);
                slide.eq(cnt).css({ zIndex:2 });
                slide.eq(cnt==n? 0:cnt+1).css({ zIndex:3 }).stop().animate({opacity:1},0).animate({opacity:0},800);
                //console.log("prev",cnt);
                }

            //PREV 슬라이드
            function prevCountFn(){
                cnt--;
                if(cnt<0){cnt=n};
                mainPrevSlideFn();
            }

            //NEXT 슬라이드
            function nextCountFn(){
                cnt++;
                if(cnt>n){cnt=0};
                mainNextSlideFn();
            }

            section01.swipe({
                swipeLeft : function(){
                    if( !slide.is(":animated") ){
                        nextCountFn();
                    }
                },
                swipeRight : function(){
                    if( !slide.is(":animated") ){
                        prevCountFn();
                    }
                }
            })

        },

        section234Fn:    function(){
         
            var window_ = $(window)
            var contentWrap = $(".section234 .content-wrap")
            var textWrap = $(".section234 .text-wrap")
            var textWrapH3 = $('.section234 .text-wrap h3')
            var textWrapH4 = $('.section234 .text-wrap h4')
            var textWrapP = $('.section234 .text-wrap p')
            var section234 = $(".section234")
            var section0204ContentWrap = $("#section02 .content-wrap, #section04 .content-wrap")
            var section03ContentWrap= $("#section03 .content-wrap")

            var rl = (windowWidth-boxWidth)/2;
            var windowWidth = window_.width(); //1170
            var windowHeight = window_.height(); //969
            var section234Height = windowHeight; 
            var boxTop = (windowHeight-boxHeight)/2; //(969-550)/2 = 209.5
            var boxWidth = contentWrap.width(); //450
            var boxHeight = boxWidth * 1.22222;
            //            = contentWrap.height(); //550
            var fontSizeH3 = rateH3 * textW;
            var rateH3 = 0.096551724
            var textW = textWrap.width();
            var fontSizeH4 = rateH4 * textW;   
            var rateH4 = 0.037931034
            var fontSizeP = rateP * textW;     
            var rateP = 0.048275862 

            setTimeout(resizeFn,100);

            function resizeFn(){
                
                rl = (windowWidth-boxWidth)/2;
                windowWidth = window_.width();
                windowHeight = window_.height();
                section234Height = windowHeight;
                boxWidth = contentWrap.width();
                boxHeight = boxWidth * 1.22222;

                if(windowHeight < boxHeight+60){
                    section234Height = boxHeight+60;
                    boxTop = 30;
                }
                else{
                    section234Height = windowHeight;
                    boxTop = (windowHeight-boxHeight)/2;
                }
                
                textW = textWrap.width();
                fontSizeH3 = rateH3 * textW;
                fontSizeH4 = rateH4 * textW;  
                fontSizeP = rateP * textW;    

                textWrapH3.css({ fontSize:fontSizeH3 });
                textWrapH4.css({ fontSize:fontSizeH4 });
                textWrapP.css({ fontSize:fontSizeP });

                contentWrap.css({ top:boxTop, height:boxHeight });
                section234.css({ height:section234Height });
            
                if( windowWidth <= 1170 ){
                    section0204ContentWrap.stop().animate({ right:rl-15 },300);
                    section03ContentWrap.stop().animate({ left:rl-15 },300);  
                }
                else{
                    section0204ContentWrap.stop().animate({ right:0 },100);
                    section03ContentWrap.stop().animate({ left:0 },100);
                }
            };
            
            window_.resize(function(){
                resizeFn();
            });


        },
        section05Fn:    function(){
            
        },
        section06Fn:    function(){
            
        },
        section07Fn:    function(){
            
        },
        section08Fn:    function(){
            
        },
        section09Fn:    function(){

            var htmlRoot = $("html");
            var fileName = null;
            var endNum = null;
            var fileNum = null;
            var winH = 0;
            var imgWrap = $(".modal .img-wrap")
            var galleryImgBtn = $("#section09 .gallery-img-btn")
            var modal = $(".modal")
            var imgWrapImg = $(".modal .img-wrap img")
            var arrowRightAndImgBtn = $(".modal .arrow-right-btn, .modal .img-btn")
            var arrowLeftBtn= $(".modal .arrow-left-btn")
            var closeBtnAndImgWrap = $(".modal .close-btn, .modal .img-wrap")
            
            setTimeout(resizeFn,100);

            function resizeFn(){
                winH = $(window).innerHeight();
                imgWrap.css({lineHeight : winH + "px"});
                //console.log(winH); -> lineHeight 설정 안 됨 
                //ㄴ> background-position과 lineHeight는 꼭 뒤에 px 단위 써줘야됨
                    //ㄴ> 안 쓰면 줄 높이가 엄청 크게 잡힘
            }
            $(window).resize(function(){
                resizeFn();
            });

            //모달창 구현
            galleryImgBtn.on({
                click : function(e){
                    var that = $(this);
                    e.preventDefault();
                    //모달창에 띄울 파일의 번호를 추출
                    fileName = that.find("img").attr("src");
                    endNum = fileName.indexOf(".jpg");
                    fileNum = Number(fileName.slice(endNum-2, endNum));
                    // console.log(fileName, fileNum);

                    //스크롤 없애기
                    htmlRoot.addClass("addScroll");

                    modalMainSlideFn();
                }

            })
            //모달창 메인 슬라이드
            function modalMainSlideFn(){
                modal.stop().fadeIn(300);
                imgWrapImg.stop().fadeOut(0).attr("src","./img/restaurant-img" + fileNum + ".jpg").fadeIn(1000);
            }
            closeBtnAndImgWrap.on({
                click : function(e){
                    e.preventDefault();
                    modal.stop().fadeOut(300);
                    //스크롤 없애기
                    htmlRoot.removeClass("addScroll");
                }
            })

            arrowRightAndImgBtn.on({
                click : function(e){
                    e.stopPropagation();
                    fileNum++;
                    fileNum>32? fileNum=25:fileNum;
                    modalMainSlideFn();
                }
            })
            arrowLeftBtn.on({
                click : function(){
                    fileNum--;
                    if(fileNum<25){fileNum=32} // 롤링되게
                    modalMainSlideFn();                    
                }
            })
        },
        section09GalleryFn: function(){
            
            var gallery = $("#section09 .gallery")
            var galleryLi = $("#section09 .gallery li")
            var galleryBtn = $("#section09 .gallery-btn")
            var window_ = $(window)
            
            // 초기값 변수
            var hRate = 600/800; 
            
            var cols = 4;
            var n = galleryLi.length; //8
            var rows = Math.ceil(n/cols);
            var winW = window_.innerWidth();
            
            var imgW = winW/cols;
            var imgH = imgW*hRate;

            gallery.removeClass("addZoom");
            gallery.css({ height:imgH*rows });
            
            //배열 두 개 필요
            var hide = [];// 초기값
            var show = [0, 1, 2, 3, 4, 5, 6, 7];// 초기값

            setTimeout(galleryFn,100);

            function galleryFn(){
                if(winW > 1200){//(1201~)
                    cols = 4;
                }
                else if( winW <= 1200 && winW > 980 ){ //1200이하  980초과 (981~1200)
                    cols = 3;
                }
                else if( winW <= 980 && winW > 760){ //(761~980)
                    cols = 2;
                }
                else if( winW <= 760 && winW >= 0){ //0~760
                    cols = 1;
                }
                n =  show.length; //배열 show의 이미지 갯수
                rows = Math.ceil(n/cols);
                
                winW = window_.innerWidth();
                imgW = winW/cols;
                imgH = imgW*hRate;

                //console.log("hide",hide);
                //console.log("show",show);
                
                //갤러리 숨김 hide();
                for(var i=0;i<hide.length;i++){
                    galleryLi.eq(hide[i]).hide(); 
                }
                //갤러리 보이기 show();
                var cnt = -1;
                
                for(i=0;i<rows;i++){ 
                    for(j=0;j<cols;j++){ 
                        cnt++; //0 1 2 3 4 5 6 7
                        if(cnt>=show.length){break;}
                        
                        galleryLi.removeClass("addZoom2");//모든 li 칸 초기화
                        galleryLi.eq(show[cnt]).show().stop().animate({ top:(imgH*i), left:(imgW*j), width:imgW, height:imgH },300,function(){
                            galleryLi.addClass("addZoom2");// 화면이 늘어난 다음에 스케일
                        });
                    }
                }
                gallery.addClass("addZoom");
            } //갤러리 메인 함수 끝

            window_.resize(function(){
                galleryFn();
            })

            // 갤러리 버튼 이벤트 0-4 (5개)
            galleryBtn.each(function(index){
                var that = $(this);
                that.on({
                    click : function(e){
                        e.preventDefault();

                        galleryBtn.removeClass("addNav");
                        that.addClass("addNav");

                        switch(index){
                            case 0 :
                                hide = [];
                                show = [0,1,2,3,4,5,6,7];
                                break;
                            case 1 :
                                hide = [0,2];
                                show = [1,3,4,5,6,7];
                                break;
                            case 2 :
                                hide = [1,3,4,5];
                                show = [0,2,6,7];
                                break;
                            case 3 :
                                hide = [0,2,5];
                                show = [1,3,4,6,7];
                                break;    
                            default:
                                hide = [0,1,3,6];
                                show = [2,4,5,7];
                        }
                        galleryFn(); //메인함수 호출 실행;
                    }   
                })
            })
        },
        section10Fn:    function(){

            var window_ = $(window);
            var winW = window_.innerWidth();
            var slideW = 975;//975 기본값
            var cnt = 0;
            var slideWrap = $("#section10 .slide-wrap")
            var slide = $("#section10 .slide")
            var nextBtn = $("#section10 .next-btn")
            var prevBtn = $("#section10 .prev-btn")

            setTimeout(resizeFn,100);

            function resizeFn(){
                winW = window_.innerWidth();
                if( winW > 975 ){
                    slideW = 975;
                }
                else{
                    slideW = winW;
                }

                slide.css({width:slideW}); //slide
                slideWrap.stop().animate({ left:-slideW*cnt },500);//slideWrap
                mainSlideFn();
            }

            window_.resize(function(){
                resizeFn();
            })

            function mainSlideFn(){
                slideWrap.stop().animate({ left:-slideW*cnt },600);
            }

            function prevSlideFn(){
                cnt--;
                if(cnt<0){cnt=0;}
                mainSlideFn();
            }
            function nextSlideFn(){
                cnt++;
                if(cnt>2){cnt=2;}
                mainSlideFn();
            }

            prevBtn.on({
                click:function(e){
                    e.preventDefault();
                    if( !$(this).is(":animated") ){
                        prevSlideFn();
                    }
                    if(cnt<0){
                        slideWrap.stop().animate({ left:-975*0},0);
                        return false;
                    }
                }
            })
            nextBtn.on({
                click:function(e){
                    e.preventDefault();
                    if( !$(this).is(":animated") ){
                        nextSlideFn();
                    }
                    if(cnt>2){
                        slideWrap.stop().animate({ left:-975*2 },0);
                        return false;
                    }
                   // console.log(cnt);
                }
            })

            //터치 스와이프
            slideWrap.swipe({
                swipeLeft:function(){
                    nextSlideFn();
                },
                swipeRight:function(){
                    prevSlideFn();
                }
            })
        },
        section11Fn:    function(){
            // 반응형으로 제작, win=$(window)
            // 화면이 줄어들면 좌측 li 박스 높이가 ul 높이에 맞춰 줄어들어야 함
            // 좌측 li 박스 높이에 따라 우측 li 박스도 따라감
            var window_ = $(window);
            var blog = $("#section11 .blog")
            var blogList = $("#section11 .blog li")
            var blogListImgH = blogList.eq(0).innerHeight();
            var fontRateH3 = 0.039711191;
            var fontRateP = 0.072202166;
            var blogListImgW = blogList.eq(0).innerWidth();
            var fontSizeH3 = fontRateH3 * blogListImgW;
            var fontSizeP = fontRateP * blogListImgW;
            
            setTimeout(resizeFn,100);

            function resizeFn(){

                blogListImgW = blogList.eq(0).innerWidth();
                blogListImgH = blogList.eq(0).innerHeight();
                fontSizeH3 = fontRateH3 * blogListImgW;
                fontSizeP = fontRateP * blogListImgW;
                
                fontSizeH3>12?fontSizeH3=12:fontSizeH3;
                fontSizeH3<8?fontSizeH3=8:fontSizeH3;

                fontSizeH3>20?fontSizeH3=20:fontSizeH3;
                fontSizeH3<15?fontSizeH3=15:fontSizeH3;

                blog.each(function(idx){
                    blog.eq(idx).children("li").eq(1).css({height:blogListImgH});
                    blog.eq(idx).find("h3").css({fontSize : fontSizeH3});
                    blog.eq(idx).find("p").css({fontSize : fontSizeP});
                });
            }

            window_.resize(function(){                
                resizeFn();
            })
        },
        section12Fn:    function(){
            var window_ = $(window);
            var h3 = $("#section12 h3");
            var h2 = $("#section12 h2");
            var container = $("#section12 .title-wrap");

            var containerW = container.innerWidth();
            var fontSizeH3 = containerW * 0.01754386;
            var fontSizeH2 = containerW * 0.035087719;

            setTimeout(resizeFn,100);

            function resizeFn(){
                containerW = container.innerWidth();
                fontSizeH3 = containerW * 0.01754386;
                fontSizeH2 = containerW * 0.035087719;

                if(fontSizeH3<13){fontSizeH3=13};
                if(fontSizeH2<25){fontSizeH2=25};
                
                h3.css({fontSize : fontSizeH3});
                h2.css({fontSize : fontSizeH2});
                
                //console.log(containerW)
                //console.log("fontSizeH3",fontSizeH3)
                //console.log(fontSizeH2)

            };

            //반응형 함수
            window_.resize(function(){
                resizeFn();
            })
        },
        section13Fn:    function(){
            var h2Number = $("#section13 h2")//780(0.012820513, 12.820513) 987(0.010131712, 10.131712) 350(0.028571429, 28.571429) 166(0.060240964, 60.240964)
            var cnt = [0,0,0,0];//증감수는 반드시 초기값 0 가지고 있어야함 
            var setId = null;
            var num = [780, 987, 350, 166]; //이거 안 쓰려면 html에 초기값 먼저 기입해주면 됨 
            var s = 10; // 10초 안에 움직인다고 상수써줌
            var mSecond = [];   //mSecond를 배열로 먼저 만들어 주고
            var window_ = $(window);
            var sec12Top = $("#section12").offset().top-500;
            var t=0;
            //var mSecond = [12.820513, 10.131712, 28.571429, 60.240964];
            //var mSecond = [s/num[0]*1000,s/num[1]*1000,s/num[2]*1000,s/num[3]*1000];//10초를 각 숫자로 나누기, 
            //                  ☝ 이것도 for문 사용해서 반복문 가능
            for (var i=0; i<num.length; i++){
                mSecond[i] = (s/num[i])*1000;
            }
            
            //setTimeout(countFn,100)
            
            //parallax scorlling
            window_.scroll(function(){
                //console.log(window_.scrollTop());
                if( window_.scrollTop() > sec12Top ){
                    if(t==0){
                        t=1;
                        countFn();
                    }
                }
                else{
                    t=0;
                    cnt = [0,0,0,0];
                }
            });

            function countFn(){
                h2Number.each(function(i){
                    setId = setInterval(function(){
                        cnt[i]++;
                        if(cnt[0]>num[0]){ //첫번째 숫자보다 크면 카운트를 끝내라
                            clearInterval(setId );//카운트 끝내고 정해준 숫자 덮어쓰기
                            h2Number.eq(0).text(num[0]); //780
                            h2Number.eq(1).text(num[1]); //987
                            h2Number.eq(2).text(num[2]); //350
                            h2Number.eq(3).text(num[3]); //166
                        }
                        else {
                            h2Number.eq(i).text(cnt[i]);
                            }
                        },mSecond[i]); 
                });
            }
        },
        section14Fn:    function(){
            //오류 제어 = 
            //전송 시 유효성 검사(빈칸으로 전송 할 수 없게)
            //폼 전송하는 코드 만들기
            //submit 버튼 클릭 시 폼 전송
            //단 조건이 있다, 폼 내용 중 이름,이메일,메시지 내용은 반드시 입력 해야 전송됨
            //그러면 전송 성공
            //아니면 한 칸이라도 빈 칸인 경우는 전송 불가
            var submit = $("#submit");

            submit.on({
                click:function(e){ //전송 버튼 클릭 후 유효성 검사
                    e.preventDefault(); // submit 고유 전송버튼의 기능 제어(삭제시킴)
                    $(".error-mesage").removeClass("addError");
                    $(".success-message").removeClass("addSuccess");
                    //$("#irumVal").removeClass("addError");
                    //$("#mailVal").removeClass("addError");
                    //$("#messageVal").removeClass("addError");

                    var irumVal = $("#irum").val();
                    var mailVal = $("#mail").val();
                    var interestedVal = $("#interested").val();
                    var messageVal = $("#message").val();
                        //if (셋 중에 한개라도 공백이라면 = 어디 하나라도 빈칸이라면){
                        if(irumVal=="" || mailVal=="" || messageVal==""){
                            //에러메세지와 전송 취소
                            if(irumVal==""){
                                $("#irumVal").addClass("addError"); //에러메세지를 색상으로 표시
                            }
                            else{ //셋 다 빈 값이 아니라면
                                $("#irumVal").removeClass("addError");
                            }
                            if(mailVal==""){
                                $("#mailVal").addClass("addError"); //에러메세지를 색상으로 표시
                            }
                            else{ //셋 다 빈 값이 아니라면
                                $("#mailVal").removeClass("addError");
                            }
                            if(messageVal==""){
                                $("#messageVal").addClass("addError"); //에러메세지를 색상으로 표시
                            }
                            else{ //셋 다 빈 값이 아니라면
                                $("#messageVal").removeClass("addError");
                            }
                            $(".error-mesage").addClass("addError");
                            return false; // 전송 취소는 무조건 마지막에 한 번만!! return이 모든 값을 초기화시키기 때문에
                        }
                        else{
                            //성공메세지와 전송
                            //$(".error-mesage").removeClass("addError");
                            //$(".success-message").addClass("addSuccess"); => ajax로 가져감
                           // contact.submit(); //<form name="contact"> 갖다쓴거
                            //일반 전송 = API;화면 바뀜

                            //위 API를 Ajax 전송방법으로 바꾸기
                            //Ajax 전송 : 화면이 바뀌지 않고 내용만 전송됨
                            $.ajax({//ajax는 서버에서만 실행됨
                                 
                                url  : "./response.php", //action="response.php"
                                type : "post", //method="post"
                                data : { // 입력 정보를 넣어줌
                                    irum : irumVal,
                                    mail : mailVal,
                                    interested : interestedVal,
                                    message : messageVal
                                },
                                success :function(data){
                                    console.log(data); //전송결과
                                    $(".error-mesage").removeClass("addError");
                                    $(".success-message").addClass("addSuccess");

                                    irumVal = $("#irum").val("");
                                    mailVal = $("#mail").val("");
                                    interestedVal = $("#interested").val(""); //select 첫번째값이 초기화값
                                    messageVal = $("#message").val("");

                                },
                                error : function(){
                                    console.log("ajax 오류");
                                }
                                //경로(내가 전송하고자 하는 파일 = response.php)먼저 쓰고 콤마(ajax 객체기반이라 콤마)
                            });
                        }
                    // val() : value -> irum의 value 값 들어옴
                }
            })



        },
        footerFn:       function(){
        }
    }; 

//위에서 함수를 만들고 밑에서 함수를 실행한다.

    brando.init();

})(window,document,jQuery);