;(function(window,document,$,undefined){
    //resize
    var _win = $(window);
    var _winH = _win.innerHeight();
    var _section = $(".section");

    var _fontRate = 0.078822911; //폰트가 창 넓이에 가지고 있는 비율
    var _winW = _win.innerWidth();
    var _fontSize = _fontRate*_winW;
    var _wheelDelta = null;
    var htmlBody = $("html,body");
    
    setTimeout(resizeFn,100);

    function resizeFn(){
        // 함수 안에서 다시 선언해주는건 바뀌는 변수만!!!!!
        _winH = _win.innerHeight();
        _winW = _win.innerWidth();
        _fontSize = _fontRate*_winW;
        
        _section.css({lineHeight: _winH+"px", fontSize: _fontSize+"px" }); //섹션의 높이 = 창높이, 글자크기=창넓이*폰트비율
    };

    _win.resize(function(){
        resizeFn();
    });

    ///////////////////////////////////////////////////////////////

    //Mouse Wheel Event
    //섹션10개를 위아래로 부드럽게 이동 휠 이벤트
    
    _section.each(function(index){
        //$(this).on("click",function(event){}) //click 이벤트를 콜백처리 하겟다는 뜻
        var that = $(this)
        that.on("mousewheel DOMMouseScroll",function(event){ //Delta값 가져올라고 휠 이벤트 쓴거임
            event.preventDefault(); //이전에 발생한 모든 이벤트에 대해서 제거시키고 새롭게 시작한다.

            //console.log( event.originalEvent.wheelDelta ); 
            //originalEvent.wheelDelta : 이벤트명령어 생각안나면 콘솔에 event쳐서 originalEvent 찾으면 됨
                //스크롤이 위, 아래로 움직이는 값 
                //위로 스크롤하면 +120 아래로 스크롤하면 -120
                //크롬에서 보임 
                //같은 의미의 detail은 firefox에서 보임

                //파이어폭스
                if(event.detail){
                    _wheelDelta = event.detail*(-1*40);
                }
                else{
                    _wheelDelta = event.originalEvent.wheelDelta; //휠의 동작이 - 인지 + 인지만 보면 됨
                }
                //console.log( "마우스 휠 델타값", _wheelDelta ); 

            if( _wheelDelta<0){ //_wheelDelta이 음수, -120이면 다음 섹션으로 부드럽게 이동한다.
                // 무한정 스크롤탑 되지 않게 범위를 정해줌
                    //console.log(index);
                    if(index<9){//다음섹션이니까 index값은 커짐,index가 9보다 작으면 밑의 코드 실행,(섹션이 0-9니까) 9보다 작지 않으면 사용 못하게 막음
                    htmlBody.stop().animate({ scrollTop:that.next().offset().top },800,"easeInOutSine"); //현재의 다음 섹션 탑 값
                }
            }
            else{ //_wheelDelta이 양수, +120이면 이전 섹션으로 부드럽게 이동한다.
                //console.log(index);
                if(index>0){ //이전섹션이니까 index값은 작아짐, 0일때는 어차피 맨 위니까
                    htmlBody.stop().animate({ scrollTop:that.prev().offset().top },800,"easeInOutSine");
                }
            }
            // 
            
        }); //mousewheel이라는 이벤트를 콜백처리 하겟다
    }); //10개를 반복해야 되니까 each()메소드
    
    
})(window,document,jQuery);
    