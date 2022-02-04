$(function(){

    var visu_slide = $('.visu_slide');
    var visu_btm_list = $('.visu_btm_list');
    var visu_right = $('.visu_arrow.right');
    var visu_left = $('.visu_arrow.left');
    var play_Btn = $('.visu_btm_wrap .controls_wrap .control.start');
    var stop_Btn = $('.visu_btm_wrap .controls_wrap .control.stop');

    let slider_play = setInterval(auto,4000);
    let slider_stop;

    first();

    function auto(){
        visu_right.trigger('click');
    }

    function first(){
    visu_slide.eq(0).addClass('on');
    visu_btm_list.eq(0).addClass('act');

    slide_Event();
    }

    function slide_Event(){
        var on_slide = $('.visual_wrap>li.on');
        var idx = on_slide.index();
        var veil = on_slide.children('.visu_veil');
        var txt_wrap = on_slide.children('.visu_txt_wrap');

        veil.animate({'width':'44%','opacity':'1'},1000);
        txt_wrap.delay(500).animate({'opacity':'1'},1000);

        visu_btm_list.eq(idx).addClass('act');
    }

    visu_right.click(right);
    visu_left.click(left);
    visu_btm_list.click(bottom);
    stop_Btn.click(stop);
    play_Btn.click(play);

    function play(){
        stop_Btn.fadeIn();
        play_Btn.fadeOut();

        slider_play = setInterval(auto,4000);
    }

    function stop(){
        stop_Btn.fadeOut();
        play_Btn.fadeIn();

        slider_stop = clearInterval(slider_play);
    }

    function bottom(e){
        e.preventDefault();

        var idx = $(this).index();

        reset();
        visu_slide.eq(idx).addClass('on');
        slide_Event();
    }

    function right(e){
        e.preventDefault();
        e.stopPropagation();

        var idx = $('.visual_wrap>li.on').index();

        reset();

        if(idx < 2){
            visu_slide.eq(idx+1).addClass('on');
        }
        if(idx == 2){
            visu_slide.eq(0).addClass('on');
        }

        slide_Event();
    }

    function left(e){
        e.preventDefault();
        var idx = $('.visual_wrap>li.on').index();

        reset();

        if(idx > 0){
            visu_slide.eq(idx-1).addClass('on');
        }
        if(idx == 0){
            visu_slide.eq(2).addClass('on');
        }

        slide_Event();
    }

    function reset(){
        visu_slide.removeClass('on');
        visu_btm_list.removeClass('act');

        visu_slide.children('.visu_veil').animate({'width':'0%','opacity':'0'},1000);
        visu_slide.children('.visu_txt_wrap').delay(500).animate({'opacity':'0'},1000);
    }

})