
(function($) {

 "use strict";
  $(document).ready(function() {


	//Pre-loader
	$(window).load(function() {
	 	$('.loader').fadeOut();
		$('.preloader').delay(250).fadeOut('slow');
		$('body').delay(250).css({'overflow':'visible'});
	 });



	//Sidemenu abr toggle

	$( ".menu-toggle" ).on( "click", function() {
	  $('.header_two').toggleClass("open");
	});

	//Progress bar
	$('.progress .progress-bar').progressbar({display_text: 'top'});


	 //Isotope activation js codes
	 jQuery(window).on("load",function() {
	  $(".portfolio_items").isotope({
	    itemSelector: '.portfolio_item',
	    masonry: {
	      gutter: 15
	    }
	  });
	 
	  $('.portfolio_menu li').click(function(){
	    $(".portfolio_menu li").removeClass("active");
	    $(this).addClass("active");
	 
	    var selector = $(this).attr('data-filter');
	  $(".portfolio_items").isotope({
	      filter: selector,
	      animationOptions: {
	          duration: 750,
	          easing: 'linear',
	          queue: false,
	      }
	  });
	  return false;
	  });
	 });


	//lightcase
	$('a[data-rel^=lightcase]').lightcase();
	



	//client slider
	$('.client_items').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: false,
		responsive: [
				{
				  breakpoint: 991,
				  settings: {
					slidesToShow: 3
				  }
				},
				{
				  breakpoint: 768,
				  settings: {
					slidesToShow: 2
				  }
				},
				{
				  breakpoint: 680,
				  settings: {
					slidesToShow: 1
				  }
				},
			]
	});

	// Top Menu addClass, removeClass

	// $('.navbar-nav > li:first-child >a').addClass('active');

		$(window).scroll(function() {
		    var position = $(this).scrollTop();

		    $('section').each(function() {
		        var target = $(this).offset().top - 120;
		        var id = $(this).attr('id');

		        if (position >= target) {
		            $('.navbar-nav li > a').removeClass('active');
		            $('.navbar-nav li > a[href=#' + id + ']').addClass('active');
		        }
		    });
		});

	// Left Menu addClass, removeClass

	$('.left_menu > li:first-child >a').addClass('active');

		$(window).scroll(function() {
		    var position = $(this).scrollTop();

		    $('section').each(function() {
		        var target = $(this).offset().top - 50;
		        var id = $(this).attr('id');

		        if (position >= target) {
		            $('.left_menu li > a').removeClass('active');
		            $('.left_menu li > a[href=#' + id + ']').addClass('active');
		        }
		    });

		    var fromTop = $(window).scrollTop();
			$(".admin-bar .header_menu").toggleClass("mfix", (fromTop > 30));

		});


  });


})(jQuery);

