$(function(){
    
    
    // nav
    var gnb = $('.gnb'); //active
    var gnb_menu_list = $('.nav_d1.d1_over');
    var sub_menu = $('.sub_menu'); //on
    var sub_menu_list = $('.sub_menu>ul>li');
    
    //mobile_nav
    var mob_nav_btn = $('.mob_nav_btn');
    var mob_nav = $('.mob_nav');
    var m_nav_bg = $('.m_nav_bg');
    var mob_btn = $('.m_nav_list_tit');
    var m_sub_menu = $('.m_nav_list li>dl');
    
    var main = $('#main');
    
    
    mob_nav_btn.click(function(){
        mob_nav.addClass('left_move');
        m_nav_bg.delay(500).fadeIn();
    })
    
    m_nav_bg.click(function(){
        $(this).fadeOut(0);
        mob_nav.removeClass('left_move');
    })
    
    mob_btn.click(function(){
        var str = $(this).attr('class');
        var idx = $('.m_nav_list_tit.on');
        console.log(str);
        
        idx.next(m_sub_menu).slideToggle();
        idx.toggleClass('on');
        
        if(str == "m_nav_list_tit on"){
            
        }else{
            $(this).toggleClass('on');
            $(this).next(m_sub_menu).slideToggle();
        }
        
    })
    
    
    gnb_menu_list.mouseenter(function(){
        var idx = $(this).index();
        console.log(idx);
        sub_menu_list.removeClass('over');
        sub_menu.addClass('on');
        sub_menu_list.eq(idx).addClass('over');
        gnb.addClass('active');
    });
    
    sub_menu_list.mouseleave(function(){
        setTimeout(pc_menu_reset,700);
    })
    
    function pc_menu_reset(){
        
        sub_menu_list.removeClass('over');
        sub_menu.removeClass('on');
        gnb.removeClass('active');
    }
    
    $('.select_language').click(function(){
        $(this).toggleClass('show');
    });

    $('.h_open_search').click(function(){
        $('.search_container').addClass('show');
        main.addClass('on');
    });
    
    $('.sch_close').click(function(){
        $('.search_container').removeClass('show');
    });

    main.click(function(){
        $('.search_container').removeClass('show');
        $(this).removeClass('on');
    })
});