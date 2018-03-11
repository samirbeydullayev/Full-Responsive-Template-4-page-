$(function(){

 //    SCROLL-TOP
 if($(window).scrollTop()<300){
    $(".scrollToTop").hide()
}

$(window).scroll(function(){
    if ($(this).scrollTop() > 300) {
        $('.scrollToTop').fadeIn(1000);
    } else {
        $('.scrollToTop').fadeOut(1000);
    }
});


$('.scrollToTop').click(function(){
    $('html, body').animate({scrollTop : 0},2000);
    return false;
});
// SCROLL-TOP-END


})