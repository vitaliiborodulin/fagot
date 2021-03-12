$('.portfolio__slider').each(function(){

	$(this).find('.portfolio__slider-main').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		lazyLoad: 'ondemand',
		infinite: false,
		asNavFor: $(this).find('.portfolio__slider-nav')
	});

	$(this).find('.portfolio__slider-nav').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: $(this).find('.portfolio__slider-main'),
		arrows: false,
		// centerMode: true,
		infinite: false,
		focusOnSelect: true,
		lazyLoad: 'ondemand'
	});

});