$('[data-fancybox="portfolio"]').fancybox({
	protect: true,
	transitionEffect: "zoom-in-out",
});

$('.btn-popup').on('click', function(){
	var text = $(this).attr('data-text');
	$('.popup__aim').text(text);
	$('#popup input[type=hidden]').val(text);
});