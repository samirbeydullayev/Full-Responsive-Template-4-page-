$(function(){

  $(".avatar-nav li").click(function(){
        $(".active").removeClass("active");
        $(this).addClass("active")
    });
  
    $(".followers-li").click(function(){
         $(".followers").fadeIn(1000);
         $(".activities").hide();
         $(".following").hide();
    });
    $(".activities-li").click(function(){
        $(".activities").fadeIn(1000);
        $(".followers").hide();
        $(".following").hide();
   });
   $(".following-li").click(function(){
    $(".following").fadeIn(1000);
    $(".activities").hide();
    $(".followers").hide();
});



     //    SCROLL-TOP
     if($(window).scrollTop()<500){
        $(".scrollToTop").hide()
    }
	
	$(window).scroll(function(){
		if ($(this).scrollTop() > 500) {
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