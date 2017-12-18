$(function() {
	$('.col').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
		}
	});

	// scroll
	$('.btn').click(function() {
		var target = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(target).offset().top
		}, 1000);
		return false;
	});

	// спрацювання плагина на 500px вище
	Revealator.effects_padding = ' -600 ';


	$('.open-popup-link').magnificPopup({
		type: 'inline',
		midClick: true
	});

	// Example: 2 Dynamically created
	$('.btn-span-1').magnificPopup({
		items: {
			src: "#NY",
			type: 'inline'
		},
		closeBtnInside: true
	});
	$('.btn-span-2').magnificPopup({
		items: {
			src: "#Seoul",
			type: 'inline'
		},
		closeBtnInside: true
	});
	$('.btn-span-3').magnificPopup({
		items: {
			src: "#Paris",
			type: 'inline'
		},
		closeBtnInside: true
	});
	$('.btn-span-4').magnificPopup({
		items: {
			src: "#Sydney",
			type: 'inline'
		},
		closeBtnInside: true
	});
	$('.btn-span-5').magnificPopup({
		items: {
			src: "#Greece",
			type: 'inline'
		},
		closeBtnInside: true
	});
	$('.btn-span-6').magnificPopup({
		items: {
			src: "#Spain",
			type: 'inline'
		},
		closeBtnInside: true
	});

	// #top
	var $btnTop = $("#top");
		$btnTop.fadeOut(10);
	$(window).on("scroll", function() {
		if ($(window).scrollTop() >= 500) {
			$btnTop.fadeIn();
		} else {
			$btnTop.fadeOut();
		}
	});
	$btnTop.on("click", function() {
		$("html,body").animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	// travel-top !костилі
	$(window).scroll(function(event) {
		// console.log(window.scrollY); //4930
		if (window.scrollY >= 2300) {
			$('.travel').each(function() {
				$(this).find('.travel-bar').animate({
					width: $(this).attr("data-percent")
				}, 3000)
			});
		}
	});
	//  провірка на доданий клас !!!не робить
	// if ($("#travel-top").hasClass('revealator-within')) {
	// 	$('.travel').each(function() {
	// 		$(this).find('.travel-bar').animate({
	// 			width: $(this).attr("data-percent")
	// 		}, 3000)
	// 	});
	// }


});