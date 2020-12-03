;(function(window,document,$,undefined){
    
    var _window = $(window);
    var _section = $(".section")
    var _winH = _window.innerHeight();
    var _winW = _window.innerWidth();
    var _fontRate = 0.078822911;
    var _fontSize = _fontRate*_winW;
    var _delta = null;
    var htmlBody = $("html,body");

    function resizeFn(){

        _winH = _window.innerHeight();
        _winW = _window.innerWidth();
        _fontSize = _fontRate*_winW;
        
        _section.css({lineHeight:_winH+"px", fontSize:_fontSize+"px"});
    }

    _window.resize(function(){
        resizeFn();
    });
    
    _section.each(function(index){
        var that = $(this);
        that.on("mousewheel",function(event){
            event.preventDefault();

            _delta = event.originalEvent.wheelDelta;
            if(_delta<0){ // 다음 섹션으로 넘어가라
                if(index<9){
                    htmlBody.stop().animate({ scrollTop:that.next().offset().top },800);
                } 
            }
            else{
                if(index>0){
                    htmlBody.stop().animate({ scrollTop:that.prev().offset().top },800);
                }
                
            }
        })
    })
    

})(window,document,jQuery);
    
