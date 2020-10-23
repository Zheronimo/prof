$(document).ready(function(){
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

	/*Вызываем slider*/
	// slider.init();

	/*Вызываем slideShow*/
	/*slideShow.init();*/

	/* Parallax */
	var section = $(".hero");
	$(window).scroll(function(){
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

	$('.blog-menu__link').on('click', function(event){
		event.preventDefault();
		$(".blog-menu__item").removeClass('blog-menu__item_active');
		console.log($(this));
		$(this).closest(".blog-menu__item").addClass('blog-menu__item_active');
		console.log($(this).attr('data-article'));
	});

	/* (function () {
		// Плавная прокрутка по ссылке
		var smooth_scrolling_to_anchor = {
			init: function () {
				this.listeners();
			},
			listeners: function () {
				var hash = window.location.hash;
				if (hash != '') {
					smooth_scrolling_to_anchor.scrolling(hash);
				}
				// ко всем ссылкам навигации по якорю добавить атрибут data-anchor
				$('[data-anchor]').on('click', function () {
					var address = $(this).attr('href');
					$('#menu').removeClass('active');
					$('#js-menu-btn').removeClass('active');
					smooth_scrolling_to_anchor.scrolling(address);
				});
			},
			scrolling: function (address) {
				// анимируем скроллинг
				var el = $(address);
				var target = el[0];
				$('html, body').stop().animate({'scrollTop': target.offsetTop}, 1000);
			},
		}
		smooth_scrolling_to_anchor.init();
	}());

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

/*var down = $('.slider__controls_down').find('.slider__control'),
	up = $('.slider__controls_up').find('.slider__control'),
	counter = 0,
	duration = 300,
	$this = $(this),
	block = $this.closest('.portfolio'),
	descItems = block.find('.slider__desc-item'),
	activeDescItem = block.find('.slider__desc-item.active'),
	displayItems = block.find('.slider__display-item'),
	activeDisplayItem = block.find('.slider__display-item.active'),
	navNextItems = block.find('.slider_right').find('.slider__item'),
	activeNavNextItem = block.find('.slider_right').find('.slider__item.active'),
	navPrevItems = block.find('.slider_left').find('.slider__item'),
	activeNavPrevNextItem = block.find('.slider_left').find('.slider__item.active');

up.on('click', function(event) {
	event = event || event.window;
	console.log(event.target);
	counter++;

	if (counter >= displayItems.length) {
		counter = 0;
	}

	var nextDescrItem = descItems.eq(counter),
		nextDisplayItem = displayItems.eq(counter),
		nextNavNextItem = navNextItems.eq(counter + 1),
		nextNavPrevItem = navPrevItems.eq(counter - 1);

	if (counter >= displayItems.length - 1) {
		nextNavNextItems = navNextItems.eq(0);
	}

	activeNavNextItem.animate({
		'top' : '100%'
	}, duration);
	nextNavNextItem.animate({
		'top' : '0%' 
	}, duration, function (){
		activeNavNextItem.removeClass('active').css('top', '100%');
		$(this).addClass('active');
	});

	activeNavPrevNextItem.animate({
		'top' : '-100%'
	}, duration);
	nextNavPrevItem.animate({
		'top' : '0%'
	}, duration, function (){
		activeNavPrevNextItem.removeClass('active').css('top', '-100%');
		$(this).addClass('active');
	});
});*/


/*slideShow*/
/* var slideShow = (function() {
	return {
		init: function() {
			$('.slider')
		}
	}
}()); */

/* slider */

// var slider = (function(){
// 	var counter = 0;
// 	var duration = 300;
// 	var inProcess = false;

// 	var moveSlide = function(container, direction){
// 		var items = $('.slider__item', container);
// 		var activeItem = items.filter('.active');
// 		// var direction = direction == 'down' ? 100 : -100;

// 		if (direction == 'down') {
// 			if(counter >= items.length){
// 			counter = 0;
// 			}
// 			var reqItem = items.eq(counter - 2);

// 			activeItem.animate({
// 			'top': 100 + '%'
// 			}, duration);

// 			reqItem.animate({
// 				'top': 0
// 			}, duration, function() {
// 				activeItem.removeClass('active').css('top', '-' + 100 + '%');
// 				$(this).addClass('active');

// 				inProcess = false;
// 			});
// 		} else {
// 			if(counter >= items.length){
// 			counter = 0;
// 			}
// 			var reqItem = items.eq(counter);

// 			activeItem.animate({
// 				'top': -100 + '%'
// 			}, duration);

// 			reqItem.animate({
// 				'top': 0
// 			}, duration, function() {
// 				activeItem.removeClass('active').css('top', 100 + '%');
// 				$(this).addClass('active');

// 				inProcess = false;
// 			});
// 		}
		
// /*		var reqItem = items.eq(counter);

// 		activeItem.animate({
// 			'top': direction + '%'
// 		}, duration);

// 		reqItem.animate({
// 			'top': 0
// 		}, duration, function() {
// 			activeItem.removeClass('active').css('top', - + direction + '%');
// 			$(this).addClass('active');

// 			inProcess = false;
// 		});*/
// 	}

// 	var showSlide = function(){
// 		var activeItemDown = $('.slide.slider_left').find('.slider__item.active'),
// 				activeItemUp = $('.slider.slider_right').find('.slider__item.active'),

// 				prevPath = activeItemDown.prev().find('.slider__img').attr('src'),

// 				nextPath = activeItemUp.next().find('.slider__img').attr('src');

// 			if (activeItemUp.next().length === 1) {
// 				$('.slider__display-img').attr('src', nextPath);
// 			} else {
// 				$('.slider__display-img').attr('src', prevPath);
// 			}
// 	}

// 	return {
// 		init: function() {
// 			$('.slider__controls').on('click', function(e){

// 				if(!inProcess){
// 					inProcess = true;
// 					moveSlide($('.slider_left'), 'down');
// 					moveSlide($('.slider_right'), 'up');
// 					showSlide();
// 					counter++;
// 				}
// 			});
// 		}
// 	}
// }()); 


