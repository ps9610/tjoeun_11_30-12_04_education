;(function(window,document,$,undefined){
    //resize
    var _win = $(window);
    var _winH = _win.innerHeight();
    var _section = $(".section");

    var _fontRate = 0.078822911; //폰트가 창 넓이에 가지고 있는 비율
    var _winW = _win.innerWidth(); //어제는 전체넓이 100%였지만 오늘은 1903px이라고 고정값을 써줘서 자동화시켜줘야함
    var _fontSize = _fontRate*_winW;
    var _wheelDelta = null; //마우스 휠 이동값 +120 -120 변수
    var _htmlBody = $("html,body");
    var _html = $("html");
    var n = _section.length;

    _html.addClass("addScroll");

    
    setTimeout(resizeFn,100);

    function resizeFn(){
        // 함수 안에서 다시 선언해주는건 바뀌는 변수만!!!!!
        _winH = _win.innerHeight();
        _winW = _win.innerWidth();
        _fontSize = _fontRate*_winW;
        
        _section.css({lineHeight: _winH+"px", fontSize: _fontSize+"px", width: _winW+"px" }); //섹션의 높이 = 창높이, 글자크기=창넓이*폰트비율
    };

    _win.resize(function(){
        resizeFn();
    });

    ///////////////////////////////////////////////////////////////

    //Mouse Wheel Event - 수평이동 (가로로 이동) : scrollLeft / offset().left
    //Mouse Wheel Event - 수직이동 (세로로 이동) : scrollLTop / offset().top
    
    //섹션10개를 좌우로 부드럽게 이동 휠 이벤트
    
    _section.each(function(index){
        //console.log(index) //index가 정확히 인식이 되고 10개가 나오는지 확인
        var _this=$(this);
        /*
        _this.on({
            mousewheel:function(){}
        }) 👉 객체 형식으로 입력한 이벤트리스너/핸들러
        */
        
        _this.on("mousewheel DOMMouseScroll", function(event){ //크로스 브라우징(파이어폭스) 하려고 객체형식 안쓰고 이렇게 씀
        // mousewheel:파이어폭스외 / DOM Mouse Scroll:파이어폭스마우스휠이벤트
            event.preventDefault();
            //console.log(event); //오리지널 이벤트 delta값 확인작업

            // 휠 아래로하면 -120 = 다음 섹션으로 이동하자 / 파이어폭스는 3px임
            // 휠 위로하면 +120 : 이전(prev) 섹션으로 부드럽게 이동하자

            //파이어 폭스
            if(event.detail){ //event.detail값이 있으면 = 파이어 폭스를 인식한다면 / 파이에 폭스는 메서드
                _wheelDelta = event.detail*(-1*40); 
                // 파이어폭스는 스크롤 위로 = -3; / 파이어폭스는 휠 아래로 = 3;
                // -1을 곱해줘서 그 외의 브라우저들이랑 스크롤 방향 같게 만들어줌
                // -40을 곱해줘서 그 외의 브라우저들이랑 _wheelDelta값 120으로 같게 맞춰줌
            }
            else{
                //그 외

                _wheelDelta = event.originalEvent.wheelDelta; // - +
            }
            
            _wheelDelta = event.originalEvent.wheelDelta; // - +


            console.log(_wheelDelta);
            //console.log(index);
            if(_wheelDelta < 0){ // -120 : 음수(0보다 작으면)인 경우 = 스크롤 내리면 다음으로 이동 
                // 👇 index<9 를 자동화 시켜줌
                if(index<n-1){ //
                   _htmlBody.stop().animate({ scrollLeft:_this.next().offset().left },800);
                }
            }
            
            else{ //+120 : 양수인 경우 = 스크롤 올리면 이전으로 이동 
                if(index>0){
                   _htmlBody.stop().animate({ scrollLeft:_this.prev().offset().left },800); //index값으로 제어하지 않으면 property 오류남
                }
            }
            
        })
    })
    
})(window,document,jQuery);

    