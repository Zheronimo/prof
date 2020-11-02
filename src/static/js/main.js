$(document).ready(function(){

	// ==============================
	// Check scrollbar width
	// ==============================
	var getScrollbarWidth = function (){
		var style = {"max-height":"100px", "overflow":"scroll", "position":"absolute"},
			wrapper = $("<div id='scroll_bar_check_A'></div>").css(style),
			inner = $("<div id='scroll_bar_check_B'></div>"),
			stretcher = $("<img src='/static/img/force-scroll.png'/>"),
			scrollBarWidth = 0;

		wrapper.append(stretcher).append(inner);
		$("body").append(wrapper);

		scrollBarWidth = wrapper.width()-inner.width();
		wrapper.remove();

		return scrollBarWidth;
	};

	// ==============================
	// App global parameters object
	// ==============================
	window.hm = {};

	window.hm.scrollBarWidth = getScrollbarWidth();
	window.hm.mobileSize = 480 - window.hm.scrollBarWidth;
	window.hm.tabletSize = 768 - window.hm.scrollBarWidth;
	window.hm.resizeLimit = 2000 - window.hm.scrollBarWidth;


	$(".welcome__btn").on("click",function(event){
		event.preventDefault();
		$(".welcome__user").css("transform", "rotateY(180deg)");
		$(".welcome__autor").css("transform", "rotateY(360deg)");
		$(this).css("display", "none");
	});
	$(".btn-nav__link_main").on("click",function(){
		$(".welcome__user").css("transform", "rotateY(0deg)");
		$(".welcome__autor").css("transform", "rotateY(180deg)");
		$(".welcome__btn").css("display","flex");
	});

	/*Вызываем preloader */
	preloader.init();


	/* Parallax */
	var section = $(".hero");
	$(window).on('scroll', function(){
		var scrollTop = -($(window).scrollTop()),
				speed = section.data("speed"),
				coords = "50%" + scrollTop / speed + "px"
				section.css("background-position", coords);
	});
	
	/* Активация меню */
	function toggleClass(className, keyWord) {
		document.querySelector('.' + className).classList.toggle(className + '_' + keyWord);
	}
	var hamBtn = document.querySelector('.humburger-btn');
	var menuItem = [].slice.call(document.querySelectorAll('.ham-menu__item'));
	hamBtn.addEventListener('click', function(e) {
		var timer = 0;

		/* scroll ban then menu is active  */
		if (hamBtn.className === 'humburger-btn') {
				document.body.style.overflow = 'hidden';
		} else {
				document.body.style.overflow = 'initial';
		}

		toggleClass('ham-menu', 'active');
		toggleClass('humburger-btn', 'active');

		menuItem.forEach(function(item) {
			/* appearing menu items whith delay */
			if (item.className === 'ham-menu__item') {
					setTimeout(function() {
							item.classList.toggle('ham-menu__item_active')
					}, timer);
					timer += 150;
			} else {
					item.classList.toggle('ham-menu__item_active')
			}
		});
	});

	/* 
	Блог и плавная прокрутка
	*/

	if(window.location.toString().indexOf('blog.html')>0)
		{
			function blogNavigation() {
				// ==============================
				// Save needed elements
				// ==============================
				var active_id,
					additional_offset = 60,
					menu = $(".blog__sidebar"),
					menu_items = menu.find("li a"),
					scroll_items = menu_items.map(function(){
						var item = $($(this).attr("href"));
						if (item.length) return item;
					});
		
				// =====================================
				// Sidemenu link smoothscroll handler
				// =====================================
				menu_items.on('click', function(e){
					var href = $(this).attr("href"),
						offsetTop = (href === "#") ? 0 : $(href).offset().top - additional_offset;
		
					e.preventDefault();
		
					$(".blog-menu__item").removeClass('blog-menu__item_active');
					$(this).closest(".blog-menu__item").addClass('blog-menu__item_active');
		
					$("html, body").stop().animate({ 
						scrollTop: offsetTop
					}, 700, "swing");
				});
		
				// ======================================================
				// Articles scroll-spy handler and sidemenu positioning
				// ======================================================
				$(window).on('scroll', function() {
					var fromTop = $(this).scrollTop(),
						blog_nav_offset = $(".blog__sidebar").offset().top,
						blog_nav_limit = $(".blog__footer").offset().top - $(".blog-menu").outerHeight(),
						current = scroll_items.map(function(){
							if ($(this).offset().top <= fromTop+additional_offset+1){
								return this;
							}
						});
		
					// Sidemenu behaviour
					if(fromTop >= blog_nav_limit && $(window).width() > window.hm.tabletSize) {
						$(".blog-menu").css({"position":"absolute", "top":blog_nav_limit + "px"});
					} else if (fromTop >= blog_nav_offset && $(window).width() > window.hm.tabletSize) {
						$(".blog-menu").css({"position":"fixed", "top":0});
						$(".blog-menu").addClass("nav-fixed");
					} else {
						$(".blog-menu").css({"position":"relative"});
						$(".blog-menu").removeClass("nav-fixed");
					}
				});
		
				// =====================================
				// Adaptive sidemenu checker
				// =====================================
			/* 	$(window).resize(function() {
					if($(window).width() <= window.hm.tabletSize){
						$(".blog-navigation__wrapper").removeClass("nav-fixed");
						$(".blog-navigation__wrapper").css({"position":"relative"});
					} else {
						if($("body").scrollTop() >= $(".blog").offset().top){
							$(".blog-navigation__wrapper").css({"position":"fixed", "top":0});
							$(".blog-navigation__wrapper").addClass("nav-fixed");
						}
					}
				}); */
			};
			blogNavigation();
		};

	
	/* SLIDER */
	(function () {
		// slider
		var slider = {
			init: function () {
				this.listeners();
			},
			listeners: function () {
				$('#slider').on('click', '.prev', function(event) {
					var el = $(this);
					var move = 'prev';
					slider.change_slide(move, el);
				});
	
				$('#slider').on('click', '.next', function(event) {
					var el = $(this);
					var move = 'next';
					slider.change_slide(move, el);
				});
			},
			change_slide: function (move, el) {
				var parent = $(el).parents('.slider');
				var slides = $(parent).find('.slide');
				var total = $(slides).length;
				var active_id = $(slides).filter('.active').index();
	
				if ( move == 'next' ) {
					var next_id = active_id + 1;
				}
				if ( move == 'prev' ) {
					var next_id = active_id - 1;
				}
	
				$(slides).removeClass('active');
	
				if ( next_id > (total - 1) ) {
					next_id = 0;
				}
	
				if ( next_id < 0 ) {
					next_id = (total - 1);
				}
	
				$(slides).eq(next_id).addClass('active');
	
				slider.change_btn(el, move, next_id, total);
			},
			change_btn: function (el, move, next_id, total) {
	
				var controls = $(el).parent('.slider-nav');
				var prevs = $(controls).find('.prev').find('.control');
				var nexts = $(controls).find('.next').find('.control');
	
				var prev_id = next_id - 1;
				var next_id = next_id + 1;
	
				if ( prev_id < 0 ) {
					prev_id = total - 1;
				}
	
				if ( next_id > (total - 1) ) {
					next_id = 0;
				}
	
				$(prevs).removeClass('active');
				$(nexts).removeClass('active');
	
				$(prevs).eq(prev_id).addClass('active');
				$(nexts).eq(next_id).addClass('active');
			},
		}
		slider.init();
	}());

	/* FORM  */
	const form = document.querySelector('.feedback-form');
	form.addEventListener('submit', formSend);
	// Функция отправки формы
	async function formSend(e) {
		e.preventDefault();

		let error = formValidate(form);

		let formDate = new FormData(form);

		if (error === 0) {
			let response = await fetch('mail.php', {
				method: 'POST',
				body: formDate
			});
			if (response.ok) {
				let result = await response.json();
				alert(result.message);
				formPreview.innerHTML = '';
				form.reset();
			}else {
				alert('Ошибка')
			}
		} else {
			alert('Заполните обязательные поля');
		}
	}
	// Функция валидации формы
	function formValidate(form){
		let error = 0;
		let formReq = document.querySelectorAll('._req');
		// Класс ._req добавляется ко всем полям которые должны быть заполнены перед отправкой формы

		for(let index = 0; index < formReq.length; index++){
			const input = formReq[index];
			formRemoveError(input);

			if (input.classList.contains('feedback-form__email')){
				if (emailTest(input)) {
					formAddError(input);
					error++;
				}
			} else {
				if (input.value === '') {
					formAddError(input);
					error++;
				}
			}
		}
		return error;
	}
	// Функция добавления класса _error
	function formAddError(input) {
		// input.parentElement.classList.add('_error'); родителю добавляется в случае кастомных checkbox, radiobutton
		input.classList.add('_error');
	}
	// Функция удаления класса _error
	function formRemoveError(input) {
		// input.parentElement.classList.remove('_error');
		input.classList.remove('_error');
	}
	// Функция теста email
	function emailTest(input) {
		return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
	}

	// $(".feedback-form").submit(function(){
	// 	let th = $(this);
	// 	$.ajax({
	// 		type: "POST",
	// 		url: "mail.php",
	// 		data: th.serialize()
	// 	}).done(function(){
	// 		alert("Thank you!");
	// 		setTimeout(function(){
	// 			// Done function
	// 			th.trigger("reset");
	// 		}, 1000);
	// 	});
	// 	return false;
	// });

});

/* Инициализируем карту */
function initMap(){
	var element = document.getElementById("map");
	var options = {
		zoom: 15,
		center: {lat:50.458800, lng:30.345619},
		styles:[
			{
					"featureType": "water",
					"elementType": "geometry",
					"stylers": [
							{
									"color": "#6c9c5a"
							},
							{
									"lightness": 17
							}
					]
			},
			{
					"featureType": "landscape",
					"elementType": "geometry",
					"stylers": [
							{
									"color": "#efefef"
							},
							{
									"lightness": 20
							}
					]
			},
			{
					"featureType": "road.highway",
					"elementType": "geometry.fill",
					"stylers": [
							{
									"color": "#ffffff"
							},
							{
									"lightness": 17
							}
					]
			},
			{
					"featureType": "road.highway",
					"elementType": "geometry.stroke",
					"stylers": [
							{
									"color": "#ffffff"
							},
							{
									"lightness": 29
							},
							{
									"weight": 0.2
							}
					]
			},
			{
					"featureType": "road.arterial",
					"elementType": "geometry",
					"stylers": [
							{
									"color": "#ffffff"
							},
							{
									"lightness": 18
							}
					]
			},
			{
					"featureType": "road.local",
					"elementType": "geometry",
					"stylers": [
							{
									"color": "#d7d7d7"
							},
							{
									"lightness": 16
							}
					]
			},
			{
					"featureType": "poi",
					"elementType": "geometry",
					"stylers": [
							{
									"color": "#f5f5f5"
							},
							{
									"lightness": 21
							}
					]
			},
			{
					"featureType": "poi.park",
					"elementType": "geometry",
					"stylers": [
							{
									"color": "#dedede"
							},
							{
									"lightness": 21
							}
					]
			},
			{
					"elementType": "labels.text.stroke",
					"stylers": [
							{
									"visibility": "on"
							},
							{
									"color": "#ffffff"
							},
							{
									"lightness": 16
							}
					]
			},
			{
					"elementType": "labels.text.fill",
					"stylers": [
							{
									"saturation": 36
							},
							{
									"color": "#333333"
							},
							{
									"lightness": 40
							}
					]
			},
			{
					"elementType": "labels.icon",
					"stylers": [
							{
									"visibility": "off"
							}
					]
			},
			{
					"featureType": "transit",
					"elementType": "geometry",
					"stylers": [
							{
									"color": "#f2f2f2"
							},
							{
									"lightness": 19
							}
					]
			},
			{
					"featureType": "administrative",
					"elementType": "geometry.fill",
					"stylers": [
							{
									"color": "#fefefe"
							},
							{
									"lightness": 20
							}
					]
			},
			{
					"featureType": "administrative",
					"elementType": "geometry.stroke",
					"stylers": [
							{
									"color": "#fefefe"
							},
							{
									"lightness": 17
							},
							{
									"weight": 1.2
							}
					]
			}
	]
	};

	// В переменной myMap создаем объект карты GoogleMaps
	var myMap = new google.maps.Map(element, options);
	
	addMarker({
		// задаем координаты маркера
		coordinates: {lat:50.459109, lng:30.35467},
		// задаем значек маркера
		image: {
			url:"static/img/map_marker.png",
			scaledSize: new google.maps.Size(42, 56)
			},
		// задаем  подпись маркеру
		// info: "<h1>Hey there</h1>"
	});

/* функция создания маркеров */
	function	addMarker(properties){
		var marker = new google.maps.Marker({
			position: properties.coordinates,
			map: myMap
		});
		if(properties.image){
			marker.setIcon(properties.image);
		}
		if(properties.info){
			var InfoWindow = new google.maps.InfoWindow({
				content: properties.info
			});
			marker.addListener("click", function(){
				InfoWindow.open(myMap, marker);
			});
		}
	}	
}

/* Preloader */
var preloader = (function () {
	var percentsTotal = 0,
		preloader = $('.preloader');

	var imgPath = $('*').map(function (ndx, element) {
		var background = $(element).css('background-image'),
			img = $(element).is('img'),
			path = '';
		
		if (background != 'none') {
			path = background.replace('url("', '').replace('")', '');
		}

		if (img) {
			path = $(element).attr('src');
		}

		if (path) return path

	});

	var setPercents = function (total, current) {
		var persents = Math.ceil(current / total * 100);

		$('.preloader__percents').text(persents + '%');

		if (persents >= 100) {
			preloader.fadeOut();
		}
	}

	var loadImages = function (images) {

		if (!images.length) preloader.fadeOut();

		images.forEach(function (img, i, images) {
			var fakeImage = $('<img>', {
				attr: {
					src: img
				}
			});

			fakeImage.on('load error', function () {
				percentsTotal++;
				setPercents(images.length, percentsTotal);
			});
		});
	}

	return {
		init: function () {
			var imgs = imgPath.toArray();

			loadImages(imgs);
		}
	}
}());
