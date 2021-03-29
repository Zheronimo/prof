$(document).ready(function() {
	svg4everybody({});

	let mainSubnavHover = () => {
		$('.catalog-nav__item').hover(function() {
			let parentList = $(this).closest('.catalog-nav__list');
			if ($(this).children('.catalog-nav__list').length) {
				let catNavHeight = $(this).children('.catalog-nav__list').outerHeight();
				if (parentList.outerHeight() < catNavHeight) {
					parentList.css('width', '720');
				}
				parentList.css('width', '720');
			}
		}, function() {
				let parentList = $(this).closest('.catalog-nav__list');
				parentList.css('height', 'auto');
				parentList.css('width', 'auto');
		})
	};

	let openSearchForm = () => {
		$(document).on('click', '.search__icon', function() {
			$(this).parent().addClass('search--open');
		})
	};

	let clearSearchForm = () => {
		$(document).on('click', '.search__clear-icon', function() {
			$('.search__input').val('');
		})
	};

	let bannerSlider = () => {
		$('.js-banner').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			prevArrow: ".banner__navigation--prev",
			nextArrow: ".banner__navigation--next",
			dots: true,
			customPaging: function(slider, i) {
				return '<div class="banner__dot"></div>'
			},
			appendDots: ".banner__dots",
			responsive: [
			    {
			      breakpoint: 767,
			      settings: {
			        arrows: false
			      }
			    }
			]
		});
	};

	let tabs = () => {
		$('.tabs-navigation__item').click(function () {
			let tabName = $(this).attr('show-tab'),
				tabsBody = $(this).closest('.tabs').find('.tabs__body')[0],
				tab = $(tabsBody).find('.' + tabName);
			$(this).addClass('tabs-navigation__item--active').siblings().removeClass('tabs-navigation__item--active');
			$(tab).addClass('tab--active').siblings().removeClass('tab--active');
			if ($(tabsBody).find('.js-products-line-slider').length) {
				$('.js-products-line-slider').each(function () {
					$(this).slick('refresh');
				});
				$('.js-product-prev__slider').each(function () {
					$(this).slick('refresh');
				});
			}
		});
	};

	let productPrevSlider = () => {
		$('.js-product-prev__slider').each(function (idx) {
			let productPrevSliderClass = "product-prev-slider-" + idx;
			this.closest('.product-prev').classList.add(productPrevSliderClass);
			$(this).slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				dots: true,
				appendDots: '.' + productPrevSliderClass + ' .product-prev__colors',
				swipe: false,
				infinite: false,
				customPaging: function(slider, i) {
					let color = $(slider.$slides[i]).data('color');
					if (color === "#ffffff") {
						return '<div class="product-prev__color product-prev__color--white" style="background-color: '+ color +'"></div>'
					} else {
						return '<div class="product-prev__color" style="background-color: '+ color +'"></div>'
					}
				}
			});
		});
	};

	let productLineSlider = () => {
		$('.js-products-line-slider').each(function (idx) {
			let productsLineSliderID = "product-line-slider-" + idx;
			this.closest('.products-line-slider').id = productsLineSliderID;
			$(this).slick({
				slidesToShow: 4,
				slidesToScroll: 1,
				infinite: false,
				dots: true,
				appendDots: '#' + productsLineSliderID + ' .products-line-slider__dots',
				prevArrow: '#' + productsLineSliderID + ' .products-line-slider__btn--prev',
				nextArrow: '#' + productsLineSliderID + ' .products-line-slider__btn--next',
				customPaging: function(slider, i) {
					return '<div class="products-line-slider__dot"></div>';
				},
				responsive: [
			    {
			      breakpoint: 1139,
			      settings: {
			        slidesToShow: 3,
			      }
			    },{
			      breakpoint: 767,
			      settings: {
			        slidesToShow: 2,
			      }
			    },{
			      breakpoint: 550,
			      settings: {
			        slidesToShow: 1,
			      }
			    }
			  ]
			});
		});
	};

	let mobileMenu = () => {
		$(document).on('click','.mobile-menu__toggle', function() {
			$(this).parent().addClass('mobile-menu--open');
			if ($(windows).width() < 768) {
				$('html').addClass('fixed');
				$('wrapper').addClass('mobile-menu-open')
			}
		});
		$(document).on('click','.mobile-menu__close', function() {
			$(this).closest('.mobile-menu').removeClass('mobile-menu--open');
			if ($(windows).width() < 768) {
				$('html').removeClass('fixed');
				$('wrapper').removeClasss('mobile-menu-open')
			}
		});
	};

	let productBorderLineSlider = () => {
		$('.js-products-border-line-slider').each(function (idx) {
			let productsBorderLineSliderID = "product-line-slider-" + idx;
			this.closest('.products-border-line-slider').id = productsBorderLineSliderID;
			$(this).slick({
				slidesToShow: 4,
				slidesToScroll: 1,
				infinite: false,
				prevArrow: '#' + productsBorderLineSliderID + ' .products-border-line-slider__btn--prev',
				nextArrow: '#' + productsBorderLineSliderID + ' .products-border-line-slider__btn--next',
				responsive: [
			    {
			      breakpoint: 1139,
			      settings: {
			        slidesToShow: 3,
			      }
			    },{
			      breakpoint: 767,
			      settings: {
			        slidesToShow: 2,
			      }
			    },{
			      breakpoint: 550,
			      settings: {
			        slidesToShow: 1,
			      }
			    }
			  ]
			});
		});
	};
	// Функция для перекдки сертификата на разрешении экрана под планшеты
	let brandInfo = () => {
		if ($(window).innerWidth() < 1140 && $(window).innerWidth() > 767) {
			$('.brand__certificates').appendTo('.brand-info__tablet');
		} else {
			$('.brand__certificates').appendTo('.brand-info');
		}
	};

	let categorySlider = () => {
		$('.js-category-slider ').slick({
			slidesToShow: 6,
			infinite: false,
			arrows: false,
			dots: true,
			customPaging: function(slider, i) {
				return '<div class="category-slider__dot"></div>'
			},
			appendDots: ".category-slider__dots",
			responsive: [
				{
					breakpoint: 1140,
					settings: {
						slidesToShow: 4,
					}
				},
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 2,
					}
				}
		]
		});
	};
	// функция для скрытия li в меню header__top на планшетном разрешении экрана
	let tabletSubnavMenu = () => {
		$(document).on('click', '.inform-nav__tablet-toggle', function () {
			$(this).toggleClass('inform-subnav--open');
		});
	};

	let select = () => {
		$(document).on('click','.select__header', function () {
			$(this).parent().toggleClass('select--open');
		});
		$(document).on('click','.select-list__item', function () {
			$(this).closest('.select').removeClass('select--open');
			let current = $(this).closest('.select').find('.select__current')[0];
			$(current).text($(this).text());
		});
	};

	let filterToggle = () => {
		$(document).on('click', '.filter-mobile__toggle', function () {
			$('.filter').addClass('filter--open');
		});
		$(document).on('click', '.filter-mobile__close', function () {
			$('.filter').removeClass('filter--open');
		});
	};

	let productSlider = () => {
		$('.js-product-slider-dots').slick({
			asNavFor: '.js-product-slider',
			slidesToShow: 3,
			vertical: true,
			infinite: false,
			slidesToScroll: 1,
			prevArrow: '.product-slider-dots__btn--prev',
			nextArrow: '.product-slider-dots__btn--next',
			responsive: [
				{
					breakpoint: 1140,
					settings: {
						slidesToShow: 2,
					}
				},
				{
					breakpoint: 767,
					settings: "unslick"
				}
		]
		});
		$('.js-product-slider').slick({
			asNavFor: '.js-product-slider-dots',
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: false,
			arrows: false
		});
	};

	let colorClicked = () => {
		$(document).on('click', '.color-list__item', function () {
			$(this).addClass('color-list__item--active').siblings().removeClass('color-list__item--active');
		});
	};
	
	let scrollToElement = () => {
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
	};

	let productDetailsWidth = () => {
		let detailArr = $('.product-details-navigation__item'),
				detailWidth = 0;
		for (let i =  0; i < detailArr.length; i++) {
			detailWidth = detailWidth + detailArr[i].offsetWidth;
		}
		$('.product-details-navigation').css('min-width', detailWidth);
	};

	let productDetailsTablet = () => {
		if ($(window).innerWidth() < 1140) {
			$('.product-info__footer').appendTo('.product__header');
			$('.product-info__header').prependTo('.product__header');
		} else {
			$('.product-info__footer').appendTo('.product-info');
			$('.product-info__header').prependTo('.product-info');
		}
	};

	mainSubnavHover();
	openSearchForm();
	clearSearchForm();
	bannerSlider();
	tabs();
	productPrevSlider();
	productLineSlider();
	mobileMenu();
	productBorderLineSlider();
	brandInfo();
	categorySlider();
	tabletSubnavMenu();
	select();
	filterToggle();
	productSlider();
	colorClicked();
	scrollToElement();
	productDetailsWidth();
	productDetailsTablet();
});

$(window).on('resize',function () {
	let brandInfo = () => {
		if ($(window).width() < 1140 && $(window).width() > 767) {
			$('.brand__certificates').appendTo('.brand-info__tablet');
		} else {
			$('.brand__certificates').appendTo('.brand-info');
		}
	};
	brandInfo();

	let productDetailsTablet = () => {
		if ($(window).innerWidth() < 1140) {
			$('.product-info__footer').appendTo('.product__header');
			$('.product-info__header').prependTo('.product__header');
		} else {
			$('.product-info__footer').appendTo('.product-info');
			$('.product-info__header').prependTo('.product-info');
		}
	};
	productDetailsTablet();
});

//Полифил для IE11
(function () {
	if (!Element.prototype.closest) {
		Element.prototype.closest = function (css) {
			var node = this;
			while (node) {
				if (node.matches(css)) return node;
				else node = node.parentElement;
			}
			return null;
		};
	}
})();
(function () {
	if (!Element.prototype.matches) {
		Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector; 
	}
})();
