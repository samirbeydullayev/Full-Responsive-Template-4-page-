$(function () {
    
      


    // section2 
    $('.section2 .owl-carousel').owlCarousel({
        animateOut:"flipOutY",
        loop: true,
        margin: 10,
        // nav:true,
        // center:true,
        autoplayTimeout: 3000,
        autoplay: true,
        // autoplaySpeed:true,
        smartSpeed: 1500,
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


// section5

    $('.this-count').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {

                duration: 1000,
                easing: 'linear',

                step: function (now) {

                    $(this).text(Math.ceil(now));
                }
            });
    })

    // section5 end




    // SECTION-8
    $('.section8 .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        // nav:true,
        // center:true,
        autoplayTimeout: 4000,
        autoplay: true,
        // autoplaySpeed:true,
        smartSpeed: 1000,
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
    var owl8 = $('.section8 .owl-carousel');
    owl8.owlCarousel();
    $('.section8 .customNextBtnn').click(function () {
        owl8.trigger('next.owl.carousel');
    })
    $('.section8 .customPrevBtnn').click(function () {
        owl8.trigger('prev.owl.carousel');

    });

    $(document).keydown(function (event) {
        if (event.keyCode == 39) {
            owl8.trigger('next.owl.carousel');
        }
        if (event.keyCode == 37) {
            owl8.trigger('prev.owl.carousel');
        }
    });
    // SECTION-8-END


    // SECTION-11
    $('.section11 .owl-carousel').owlCarousel({
        animateIn:"bounceIn",
        loop: true,
        margin: 10,
        // nav:true,
        // center:true,
        autoplayTimeout: 2000,
        autoplay: true,
        // autoplaySpeed:true,
        smartSpeed: 1000,
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

    // SECTION-11-END



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
	
    //    REGISTARTION 

    hd=true;
    $(".mail .head").click(function(){
        
  if(hd==true){
    $(".mail").css("top","25%");
    $(".mail .down").css("display","none");
    $(".mail .up").css("display","block")
    
    hd=false;
  }  else{
    $(".mail").css("top","95%");
    $(".mail .down").css("display","block");
    $(".mail .up").css("display","none")
    hd=true;
  } 
    });
    // REGISTRATION-END


  
        

})