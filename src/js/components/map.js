function isInViewport(elem) {
	var elementTop = $(elem).offset().top;
	var elementHeight = $(elem).outerHeight();
	var elementBottom = elementTop + elementHeight;


	var viewportTop = $(window).scrollTop();
	var viewportBottom = viewportTop + $(window).height();

	return elementBottom > viewportTop && elementTop  < viewportBottom;
};

function start_lazy_map(elem) {
	if (!map_loaded) {
			var map_block = $(elem);
			map_loaded = true;
			map_block.attr('src', map_block.attr('data-src'));
			map_block.removeAttr('data_src');
	}
}


var map_loaded = false;

$('.map').on('click', function(){
	start_lazy_map('#ymap_lazy');
})

$(window).on('resize scroll', function() {
	if (isInViewport('.map')) {
		start_lazy_map('#ymap_lazy');
	} 
});