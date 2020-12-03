;(function(window,document,$,undefined){
    //resize
    var _win = $(window);
    var _winH = _win.innerHeight();
    var _section = $(".section");

    var _fontRate = 0.078822911; //폰트가 창 넓이에 가지고 있는 비율
    var _winW = _win.innerWidth();
    var _fontSize = _fontRate*_winW;
    
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
        
    }); //10개를 반복해야 되니까 each()메소드


})(window,document,jQuery);