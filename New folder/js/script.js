$(function(){
    $(window).on('scroll',function(){
        var scroll = $(window).scrollTop()
        if(scroll > 90){
            $('#navbar-main-menu').addClass('main-nav')
        }else{
            $('#navbar-main-menu').removeClass('main-nav')
        }
    })
})