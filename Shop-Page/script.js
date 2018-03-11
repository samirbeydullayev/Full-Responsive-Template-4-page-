$(function(){
        // section2 
        $('.section2 .owl-carousel').owlCarousel({
            animateIn:"rollIn",
            animateOut:"rollOut",
            loop: true,
            margin: 10,
            // nav:true,
            // center:true,
            autoplayTimeout: 4000,
            autoplay: true,
            // autoplaySpeed:true,
            smartSpeed: 2000,
            // dotsEach:true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        })
        var owl = $('.section2 .owl-carousel');
        
        owl.owlCarousel();
        $('.section2 .customNextBtn').click(function () {
            owl.trigger('next.owl.carousel');
        })
        $('.section2 .customPrevBtn').click(function () {
            owl.trigger('prev.owl.carousel');
    
        });
    
        $(document).keydown(function (event) {
            if (event.keyCode == 39) {
                owl.trigger('next.owl.carousel');
            }
            if (event.keyCode == 37) {
                owl.trigger('prev.owl.carousel');
            }
        });
    
    // section-2 end


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