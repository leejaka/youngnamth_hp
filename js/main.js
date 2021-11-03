$(function(){

    // search 나타나기
    var searchBtn = $('.search-wrap .openBtn'),
        search = $('.search-wrap .search'); 

    searchBtn.click(function(){
        search.fadeToggle(400);
    });


    //네비게이션

    var mainMenu = $('#header .mainMenu');

    mainMenu.each(function(){
        $(this).hover(function(){
            $(this).find('.sub').stop().slideDown(400);
        },function(){
            $(this).find('.sub').stop().fadeOut(400);
        });
    });


    // 메인비주얼  슬라이드

    // var slideShow = $('.main-visual'),
    //     slideGroup = slideShow.find('.slideArea'),
    //     slide = slideGroup.find('.slide'),
    //     slideCount = slide.length,
    //     curIndex = 0,
    //     timer;

    // $slide.each(function(i){  // i는 각각의 슬라이드 인덱스 번호를 가짐
    //     $(this).css({left:i*100 + '%'})
    // });
    
    // function goToSlide(index){
    //     slideGroup.animate({left: (-index * 100 + '%')}, 500);
    //     curIndex = index;
    // }

    // goToSlide(curIndex);

    // function startTimer() {
    //     timer = setInterval(function(){
    //         var nextIndex = (curIndex + 1) % slideCount;
    //         goToSlide(nextIndex);
    //     }, 3000);
    // };

    // startTimer();


    // 공지사항 탭

    var $tabBtn = $('.tabArea .tabBtn'),
        $tabCon = $('.tablist .tabCon'),
        $height = 0;

    $tabBtn.click(function(e){
        e.preventDefault();
        
        $tabBtn.removeClass('active');
        $(this).addClass('active');

        $tabCon.hide();
        $(this).next('.tabCon').show();
    
    });
    $tabBtn.eq(0).trigger('click');

   

    // sns 슬라이드

    

});