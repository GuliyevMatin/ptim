(function($) {
	'use strict';
	// $(".navbar-form").hide()
	// Preloader JS
	$(function() {
		$('body').addClass('loaded');
	});


	// Go To Top JS
	// Scroll Event
	$(window).on('scroll', function(){
		var scrolled = $(window).scrollTop();
		if (scrolled > 300) $('.go-top').addClass('active');
		if (scrolled < 300) $('.go-top').removeClass('active');
	});  

	// Click Event JS
	$('.go-top').on('click', function() {
		$("html, body").animate({ scrollTop: "0" },  100);
	});

	//Search Icon JS
	$("#search").click(function() {
		$(".my-menu .nav-item .nav-link").addClass("hide-item")
		$(".search-form").addClass("active")
		$("#close").addClass("active")
		$("#search").css({"display": "none"})
	})

	$("#close").click(function() {
		$(".my-menu .nav-item .nav-link").removeClass("hide-item")
		$(".search-form").removeClass("active")
		$("#close").removeClass("active")
		$("#search").css({"display": "block"})

	})

	// Home News Carousel
	$('.home-news-carousel').owlCarousel({
		loop:true,
		margin:30,
		nav:true,
		navText: ["<img src='./assets/img/owl-carousel-left.svg'>","<img style='transform:rotate(180deg);' src='./assets/img/owl-carousel-left.svg'>"],
		responsive:{
			0:{
				items:1
			},
			768:{
				items:2
			},
			1200:{
				items:3
			}
		}
	})

})(jQuery);
