$(function(){
    /* Slider */
    $('.header__slider').slick({
        arrows: false,
        dots: true,
        appendDots: '.header__slider_dots',
        speed: 700 
    });
    $('.gallery__slider').slick({
        appendArrows: '.gallery__buttons',
        prevArrow: '<button type="button" class="gallery__buttons_prev"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="38" height="16" viewBox="0 0 41 18"><defs><path id="gsjja" d="M217 2527l16-8v7h22v2h-22v6.99z"/><path id="gsjjb" d="M217 2527l16-8v7h22v2h-22v6.99z"/><clipPath id="gsjjc"><use fill="#fff" xlink:href="#gsjja"/></clipPath></defs><g><g transform="translate(-215 -2518)"><use fill="#fff" xlink:href="#gsjjb"/><use fill="#fff" fill-opacity="0" stroke="#525252" stroke-miterlimit="50" stroke-width="1" clip-path="url(&quot;#gsjjc&quot;)" xlink:href="#gsjjb"/></g></g></svg></button>',
        nextArrow: '<button type="button" class="gallery__buttons_next"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="38" height="16" viewBox="0 0 41 18"><defs><path id="z7i7a" d="M1385 2527l-16 7.99V2528h-22v-2h22v-7z"/><clipPath id="z7i7b"><use fill="#fff" xlink:href="#z7i7a"/></clipPath></defs><g><g transform="translate(-1346 -2518)"><use fill="#fff" xlink:href="#z7i7a"/><use fill="#fff" fill-opacity="0" stroke="#525252" stroke-miterlimit="50" stroke-width="1" clip-path="url(&quot;#z7i7b&quot;)" xlink:href="#z7i7a"/></g></g></svg></button>'
    });

    /* Menu */
    	var menuBtn = $('.burger');
	    var menu = $('.menu');

	menuBtn.on('click', function(event){
		event.preventDefault();
		menu.toggleClass('menu__active');
	});

	/*Scroll to Element*/
	$('.scroll-link')
	.not('[href="#"]')
	.not('[href="#0"]')
	.click(function (event) {
			if (
					location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
					&&
					location.hostname == this.hostname
			) {
					var target = $(this.hash);
					target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
					if (target.length) {
							event.preventDefault();
							$('html, body').animate({
									scrollTop: target.offset().top - 50
							}, 1000, function () {
									var $target = $(target);
									$target.focus();
									if ($target.is(":focus")) {
											return false;
									} else {
											$target.attr('tabindex', '-1');
											$target.focus();
									}
									;
							});
					}
			}
		});
});