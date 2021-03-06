$(function(){

	$('.main-slider').slick({
  		arrows:true,
  		dots:false,
  		customPaging:function(){return ''},
  		autoplay: false,
  		prevArrow: '<svg class="prev" width="19" height="32" viewBox="0 0 19 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.726989 17.5262C-0.115908 16.6833 -0.115908 15.3167 0.726989 14.4738L14.4628 0.738012C15.3057 -0.104884 16.6723 -0.104884 17.5152 0.738012C18.3581 1.58091 18.3581 2.94751 17.5152 3.79041L5.30558 16L17.5152 28.2096C18.3581 29.0525 18.3581 30.4191 17.5152 31.262C16.6723 32.1049 15.3057 32.1049 14.4628 31.262L0.726989 17.5262ZM4.41602 18.1584H2.25319L2.25319 13.8416H4.41602L4.41602 18.1584Z" fill="white"/></svg>',
    	nextArrow: '<svg class="next" width="19" height="32" viewBox="0 0 19 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.501 17.5262C18.3439 16.6833 18.3439 15.3167 17.501 14.4738L3.76525 0.738012C2.92235 -0.104884 1.55575 -0.104884 0.712852 0.738012C-0.130044 1.58091 -0.130044 2.94751 0.712852 3.79041L12.9224 16L0.712852 28.2096C-0.130044 29.0525 -0.130044 30.4191 0.712852 31.262C1.55575 32.1049 2.92235 32.1049 3.76525 31.262L17.501 17.5262ZM13.812 18.1584H15.9748V13.8416H13.812V18.1584Z" fill="white"/></svg>',
	})

	$('.placement__items').slick({
  		arrows:true,
  		dots:false,
  		infinite: true,
  		slidesToShow: 3,
  		slidesToScroll: 3,
  		prevArrow: '<svg class="prev" width="19" height="32" viewBox="0 0 19 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.726989 17.5262C-0.115908 16.6833 -0.115908 15.3167 0.726989 14.4738L14.4628 0.738012C15.3057 -0.104884 16.6723 -0.104884 17.5152 0.738012C18.3581 1.58091 18.3581 2.94751 17.5152 3.79041L5.30558 16L17.5152 28.2096C18.3581 29.0525 18.3581 30.4191 17.5152 31.262C16.6723 32.1049 15.3057 32.1049 14.4628 31.262L0.726989 17.5262ZM4.41602 18.1584H2.25319L2.25319 13.8416H4.41602L4.41602 18.1584Z" fill="black"/></svg>',
    	nextArrow: '<svg class="next" width="19" height="32" viewBox="0 0 19 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.501 17.5262C18.3439 16.6833 18.3439 15.3167 17.501 14.4738L3.76525 0.738012C2.92235 -0.104884 1.55575 -0.104884 0.712852 0.738012C-0.130044 1.58091 -0.130044 2.94751 0.712852 3.79041L12.9224 16L0.712852 28.2096C-0.130044 29.0525 -0.130044 30.4191 0.712852 31.262C1.55575 32.1049 2.92235 32.1049 3.76525 31.262L17.501 17.5262ZM13.812 18.1584H15.9748V13.8416H13.812V18.1584Z" fill="black"/></svg>',
		responsive: [
		    {
		      breakpoint: 769,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2
		    	}
		    },
		    {
		      breakpoint: 591,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		]
	})

	$('.testimonials__items').slick({
  		arrows:true,
  		dots:false,
  		infinite: true,
  		slidesToShow: 3,
  		slidesToScroll: 3,
  		prevArrow: '<svg class="prev" width="19" height="32" viewBox="0 0 19 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.726989 17.5262C-0.115908 16.6833 -0.115908 15.3167 0.726989 14.4738L14.4628 0.738012C15.3057 -0.104884 16.6723 -0.104884 17.5152 0.738012C18.3581 1.58091 18.3581 2.94751 17.5152 3.79041L5.30558 16L17.5152 28.2096C18.3581 29.0525 18.3581 30.4191 17.5152 31.262C16.6723 32.1049 15.3057 32.1049 14.4628 31.262L0.726989 17.5262ZM4.41602 18.1584H2.25319L2.25319 13.8416H4.41602L4.41602 18.1584Z" fill="black"/></svg>',
    	nextArrow: '<svg class="next" width="19" height="32" viewBox="0 0 19 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.501 17.5262C18.3439 16.6833 18.3439 15.3167 17.501 14.4738L3.76525 0.738012C2.92235 -0.104884 1.55575 -0.104884 0.712852 0.738012C-0.130044 1.58091 -0.130044 2.94751 0.712852 3.79041L12.9224 16L0.712852 28.2096C-0.130044 29.0525 -0.130044 30.4191 0.712852 31.262C1.55575 32.1049 2.92235 32.1049 3.76525 31.262L17.501 17.5262ZM13.812 18.1584H15.9748V13.8416H13.812V18.1584Z" fill="black"/></svg>',
		responsive: [
		    {
		      breakpoint: 769,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2
		    	}
		    },
		    {
		      breakpoint: 591,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		]
	})

	$('.catalog__item-images').slick({
  		arrows:false,
  		dots:true,
  		autoplay: true,
  		
	})

	$('.room__bigslider').slick({
  		slidesToShow: 1,
  		slidesToScroll: 1,
  		arrows: false,
  		fade: true,
  		asNavFor: '.room__slider'
	});

	$('.room__slider').slick({
  		arrows:true,
  		dots:false,
  		autoplay: false,
  		infinite: true,
  		slidesToShow: 4,
  		slidesToScroll: 1,
  		asNavFor: '.room__bigslider',
  		centerMode: true,
  		focusOnSelect: true,
  		prevArrow: '<svg class="prev" width="19" height="32" viewBox="0 0 19 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.726989 17.5262C-0.115908 16.6833 -0.115908 15.3167 0.726989 14.4738L14.4628 0.738012C15.3057 -0.104884 16.6723 -0.104884 17.5152 0.738012C18.3581 1.58091 18.3581 2.94751 17.5152 3.79041L5.30558 16L17.5152 28.2096C18.3581 29.0525 18.3581 30.4191 17.5152 31.262C16.6723 32.1049 15.3057 32.1049 14.4628 31.262L0.726989 17.5262ZM4.41602 18.1584H2.25319L2.25319 13.8416H4.41602L4.41602 18.1584Z" fill="black"/></svg>',
    	nextArrow: '<svg class="next" width="19" height="32" viewBox="0 0 19 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.501 17.5262C18.3439 16.6833 18.3439 15.3167 17.501 14.4738L3.76525 0.738012C2.92235 -0.104884 1.55575 -0.104884 0.712852 0.738012C-0.130044 1.58091 -0.130044 2.94751 0.712852 3.79041L12.9224 16L0.712852 28.2096C-0.130044 29.0525 -0.130044 30.4191 0.712852 31.262C1.55575 32.1049 2.92235 32.1049 3.76525 31.262L17.501 17.5262ZM13.812 18.1584H15.9748V13.8416H13.812V18.1584Z" fill="black"/></svg>',
		responsive: [
		    {
		      breakpoint: 592,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 490,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 350,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		]
	})



	$('.aside-menu__option').on('click', function() {
		$(this).toggleClass('aside-menu__option--active');
	});



	$('.menu__btn').on('click', function() {
		$('.menu__btn').toggleClass('menu__btn--active');
		$('.menu__list').toggleClass('menu__list--active');
		$('.header').toggleClass('header--active');
	});

	$('.menu__list-link').on('click', function() {
		$('.menu__btn').removeClass('menu__btn--active');
		$('.menu__list').removeClass('menu__list--active');
		$('.header').removeClass('header--active');
	});

	$('.room__tab').on('click', function() {
		$('.room__tab').removeClass('room__tab--active');
		$(this).toggleClass('room__tab--active');
	});


	
	var Mixer = mixitup ( '.room__tab-content' , {
    	load: {
			filter: '.category-a'
		}
	});

	$("a#gallery-img").fancybox();
	
});