//= ../../node_modules/jquery.maskedinput/src/jquery.maskedinput.js
//= ../../node_modules/@fancyapps/fancybox/dist/jquery.fancybox.min.js
//= ../../node_modules/slick-carousel/slick/slick.min.js

$(function(){

	$('input[type="tel"]').mask("+7 (999) 999-9999");

	//= components/map.js
	//= components/popup.js
	//= components/slider.js
	//= components/upBtn.js

	document.addEventListener('wpcf7mailsent', function(event) {
		location.href='/thanks'
	})

});

