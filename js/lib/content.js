$(function(){

    const btn_tab = $('.recomm_tab a.btn_tab');
    const recomm_list = $('.recomm_list');

    btn_tab.click(recomm);


    function recomm(e){
        e.preventDefault();
        
        const idx = $(this).index();
        console.log(idx);

        btn_tab.removeClass('on');
        $(this).addClass('on');

        recomm_list.removeClass('act');
        recomm_list.eq(idx).addClass('act');
    }
});