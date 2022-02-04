$(function(){

    const fl_slider = $('.flag_slider li');
    const fl_btn_list = $('.flag_btn_wrap li');
    const fl_left_btn = $('.flagside.left');
    const fl_right_btn = $('.flagside.right');

    first();

    function first(){
    fl_slider.eq(0).addClass('on');
    fl_btn_list.eq(0).addClass('act');
    }

    fl_right_btn.click(right_event);
    fl_left_btn.click(left_event);
    fl_btn_list.click(fl_btn_event);

    function fl_btn_event(e){
        e.preventDefault();

        const idx = $(this).index();
        reset();

        fl_slider.eq(idx).addClass('on');
        fl_btn_list.eq(idx).addClass('act');
    }

    function right_event(e){
        e.preventDefault();
        let idx = $('.flag_slider li.on').index();

        reset();

        if(idx < 3){
            fl_slider.eq(idx+1).addClass('on');
            fl_btn_list.eq(idx+1).addClass('act');
        }
        if(idx == 3){
            idx = 0;
            fl_slider.eq(idx).addClass('on');
            fl_btn_list.eq(idx).addClass('act');
        }
    }

    function left_event(e){
        e.preventDefault();
        let idx = $('.flag_slider li.on').index();

        reset();

        if(idx > 0){
            fl_slider.eq(idx-1).addClass('on');
            fl_btn_list.eq(idx-1).addClass('act');
        }
        if(idx == 0){
            idx = 3;
            fl_slider.eq(idx).addClass('on');
            fl_btn_list.eq(idx).addClass('act');
        }
    }

    function reset(){
        fl_slider.removeClass('on');
        fl_btn_list.removeClass('act');
        }
});