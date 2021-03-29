$(document).ready(function() {
	//Popup
	$('.popup').magnificPopup({type:'image'});
	$('.popup_form').magnificPopup();

	//Паралакс эффекты
	$.stellar({
		responsive: true,
		horizontalOffset: 60
	});

	//Карусель
	$('.owl-carousel').owlCarousel({
    // loop: true,
    items: 1,
    nav:true,
    responsiveClass:true,
    responsive: true,
    navText: ""
});

	// Подгоняем высоту фона под размер экрана
	function wResize() {
		$(".header").css("min-height", $(window).height());
	};
	wResize();
	$(window).resize(function() {
		wResize();
	});
	//Поле телефона
	jQuery(function($){
	   $("#phone").mask("+7(999) 999-99-99");
    });
	// Tab
	$('.contacts .tab').click(function() {
		$('.contacts .tab').removeClass('active').eq($(this).index()).addClass('active');
		$('.contacts .tab_item').hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass('active');

	$('.header_discounts .tab').click(function() {
		$('.header_discounts .tab').removeClass('active').eq($(this).index()).addClass('active');
		$('.header_discounts .tab_item').hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass('active');

	$('.address .tab').click(function() {
		$('.address .tab').removeClass('active').eq($(this).index()).addClass('active');
		$('.address .tab_item').hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass('active');

	$('footer .tab').click(function() {
		$('footer .tab').removeClass('active').eq($(this).index()).addClass('active');
		$('footer .tab_item').hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass('active');

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function(e) {
		var ths = $(this)
		e.preventDefault;
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				var magnificPopup = $.magnificPopup.instance;
				//save instance in magnifigPopup variable
				magnificPopup.close();
				//Close popup that is currently opened
				ths.trigger('reset');
			}, 1000);
		});
		return false;
	});
	
});
$(window).load(function() {
	//Animate
	$(".header_title h1").animated("fadeInDown", "fadeOut");	
	$(".header_title p").animated("fadeInUp", "fadeOut");
	$(".header .header_discounts").animated("flipInY", "fadeOut");
	$(".about_item").animated("fadeInRight", "fadeOutRight");
	$(".about .form").animated("zoomInRight", "fadeOut");
	$(".form").animated("zoomInRight", "zoomInRight");
	$(".carousel_item .img_wrap img").animated("shake", "fadeOut");
	$(".request p").animated("fadeInUp", "fadeOut");
	$("footer").animated("fadeInUp", "fadeOut");


});