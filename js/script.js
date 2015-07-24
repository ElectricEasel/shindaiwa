$(document).ready(function(){
	$('#nav-toggle').click(function(){
		toggleMenuExpand();
	});
	$('#backdrop').click(function(){
		toggleMenuExpand();
	});

	function toggleMenuExpand() {
		$('#main-nav').toggleClass('collapsed');
		$('body').toggleClass('expanded');
		$('#backdrop').toggleClass('collapsed');
	}

	$('#search-icon').click(function(){
		$('#search-bar').css('z-index','777');
		var search = $('input#search');
		search.toggleClass('collapsed');
		$('header').toggleClass('search-expanded');

		if(!search.hasClass('collapsed')) {
			$('#search-bar').css('z-index','999');
			search.focus();
		}
	});

	$("#home-carousel").swiperight(function() {  
		$(this).carousel('prev');  
	});  
	$("#home-carousel").swipeleft(function() {  
		$(this).carousel('next');  
	});  

	var productCarousel = $('#product-carousel');
	productCarousel.owlCarousel({
		loop: true,
		autoplay: false,
		responsive: {
			0: {
				items:2
			},
			480: {
				items:3
			},
			650: {
				items:4
			},
			991: {
				items:6
			},
			1199: {
				items:7
			},
			1399: {
				items:8
			}
		}
	});

	$('#prev-product').click(function(){
		productCarousel.trigger('prev.owl.carousel');
	});
	$('#next-product').click(function(){
		productCarousel.trigger('next.owl.carousel');
	});

	var marketingCarousel = $('#marketing-carousel');
	marketingCarousel.owlCarousel({
		loop: false,
		autoplay: false,
		responsive: {
			0: {
				items:1,
				dots: false,
				margin:0
			},
			480: {
				items:2,
				dots: false,
				margin:25
			},
			768: {
				items:3,
				dots: true,
				margin:25
			},
			1199: {
				items:4,
				dots: true,
				margin:25
			}
		}
	});

	$('#prev-spot').click(function(){
		marketingCarousel.trigger('prev.owl.carousel');
	});
	$('#next-spot').click(function(){
		marketingCarousel.trigger('next.owl.carousel');
	});
});
$(window).load(function(){
	$('ul.sub-level').each(function(){
		if($(this).parent().hasClass('special')) {
			return 0;
		}
		$(this).css('height','auto');
		var height = $(this).height();
		$(this).attr('data-height',height);
		$(this).css('height','0');
	});
	var parent = $('.parent');
	parent.click(function(){
		if($(this).hasClass('special')) {
			return 0;
		}
		var trueClass = false;
		$(this).toggleClass('expanded');
		$('ul.sub-level').css('height','0');
		var height = $(this).children('ul.sub-level').attr('data-height');
		if($(this).hasClass('expanded')) {
			$(this).children('ul.sub-level').css('height',height);
			trueClass = true;
		}
		parent.removeClass('expanded');
		if(trueClass) {
			$(this).addClass('expanded');
		}
	});

	var special = $('.parent.special');
	var returnMenu = $('.back');
	special.click(function(){
		if($(window).innerWidth() > 767) {
			return 0;
		}
		if($(this).hasClass('expanded')) {
			return 0;
		}
		$('ul.main-level > li').hide();
		returnMenu.show();
		$(this).show();
		$(this).toggleClass('expanded');
		$(this).children('ul.sub-level').css('height','auto');
	});
	returnMenu.click(function(){
		$('ul.sub-level').css('height','0');
		parent.removeClass('expanded');
		$('ul.main-level > li').show();
		returnMenu.hide();
	})
})