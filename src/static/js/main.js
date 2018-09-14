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
	/* Parallax */
	var section = $(".hero");
	$(window).scroll(function(){
		var scrollTop = -($(window).scrollTop()),
				speed = section.data("speed"),
				coords = "50%" + scrollTop / speed + "px"
				section.css("background-position", coords);
	});
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
		})
})
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
									"color": "#f5f5f5"
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
									"color": "#ffffff"
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
		info: "<h1>Hey there</h1>"
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
