//var isMobile = /iPhone|iPod|iPad|Phone|Mobile|Android|hpwos/i.test(navigator.userAgent);
//var isPhone = /iPhone|iPod|Phone|Android/i.test(navigator.userAgent);
/* SHARED VARS */
var touch = false;

// handles Animate
function dataAnimate() {
    $('[data-animate]').each(function() {

        var $toAnimateElement = $(this);

        var toAnimateDelay = $(this).attr('data-delay');

        var toAnimateDelayTime = 0;

        if (toAnimateDelay) {
            toAnimateDelayTime = Number(toAnimateDelay);
        } else {
            toAnimateDelayTime = 200;
        }

        if (!$toAnimateElement.hasClass('animated')) {

            $toAnimateElement.addClass('not-animated');

            var elementAnimation = $toAnimateElement.attr('data-animate');

            $toAnimateElement.appear(function() {

                setTimeout(function() {
                    $toAnimateElement.removeClass('not-animated').addClass(elementAnimation + ' animated');
                }, toAnimateDelayTime);

            }, {
                accX: 0,
                accY: -80
            }, 'easeInCubic');

        }

    });
}

function addaffix(scr){
	if($(window).innerWidth() >= 992 ){
      if(scr > 0){
        if(!$('.page-header').hasClass('affix')){
          $('.page-header').addClass('affix').addClass('fadeInDown animated');
        }
      }
      else{
        if($('.page-header').hasClass('affix')){
          $('.page-header').removeClass('affix').removeClass('fadeInDown animated');
        }
      }
    }
}

function animateclick(){
	$(".menu-demo").click(function() {
		$('html, body').animate({
				scrollTop: $(".demoTheme-layout").offset().top 
			}, 1000);
		return false;
		});
	$(".menu-features").click(function() {
		$('html, body').animate({
				scrollTop: $(".featuresTheme-layout").offset().top 
			}, 1000);
		return false;
	});	
	$("[data-go-layout]").click(function() {
		var id = $(this).data('go-layout');
		$('html, body').animate({
				scrollTop: $('#'+id).offset().top - 100 
			}, 1000);
		return false;
	});	
}

function slider(){
	$('.shop-content').owlCarousel({
		nav: true,
		loop: true,
		dots: false,
		responsive: {
			0: {
				items: 1
			},
			541: {
				items: 2
			},
			1200: {
				items: 3
			}
		}
	});
	$('.product-content').owlCarousel({
		nav: true,
		loop: true,
		dots: true,
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
	});	
	$('.product-content').on('translated.owl.carousel',function(e) {
		var item = $('.product-content').find('.active .cell').data('item');
		$('.product-layout-content').find('[data-goto-item]').removeClass('active');
		$('.product-layout-content').find('[data-goto-item='+item+']').addClass('active');
	});

	$('.product-layout-content').find('[data-goto-item]').on('click', function(){
		var item = $(this).data('goto-item');
		$('.product-content').trigger('to.owl.carousel', item-1);
		return false;
	});
	
	$('.blog-content').owlCarousel({
		nav: true,
		loop: true,
		dots: true,
		center: true,
		responsive: {
			0: {
				items: 1
			},
			540: {
				items: 2
			},
			1200: {
				items: 3
			}
		}
	});	
	$('.blog-content').on('translated.owl.carousel',function(e) {
		var item = $('.blog-content').find('.active.center .cell').data('item');
		$('.blog-layout-content').find('[data-goto-item]').removeClass('active');
		$('.blog-layout-content').find('[data-goto-item='+item+']').addClass('active');
	});

	$('.blog-layout-content').find('[data-goto-item]').on('click', function(){
		var item = $(this).data('goto-item');
		$('.blog-content').trigger('to.owl.carousel', item-1);
		return false;
	});
}

jQuery(document).ready(function($) {
    /* DETECT PLATFORM */
    $.support.touch = 'ontouchend' in document;

    if ($.support.touch) {
        touch = true;
        $('body').addClass('touch');
    } else {
        $('body').addClass('notouch');
    }

    /* Handle Animate */
	if (($(window).innerWidth() >= 1200) && (touch == false)) {
        dataAnimate();
    } else {
        $('.not-animated').css("opacity", "1");
    }
	animateclick();
	slider();
});
var checks = 0;
jQuery(document).scroll(function() {
	var scrollTop = jQuery(this).scrollTop();
	addaffix(scrollTop);
});
jQuery(document).resize(function() {
	var scrollTop = jQuery(this).scrollTop();
    addaffix(scrollTop);
});
