// $(document).ready(function() {
	

// });

document.addEventListener('DOMContentLoaded', () => {
	svg4everybody({});

	const searchBtn = document.querySelector('.search-link');
	const searchForm = document.querySelector('.header-search');
	const headerNav = document.querySelector('.header__nav');
	const headerPhone = document.querySelector('.header__phone');
	const headerCloseBtn = document.querySelector('.header__close');
	const burger = document.querySelector('.burger');
	let scrollWidth = window.innerWidth - document.body.offsetWidth +'px';

	burger.addEventListener('click', ()=>{
		burger.classList.toggle('active');
		headerNav.classList.toggle('active');
		document.body.classList.toggle('lock');

		if(headerNav.classList.contains('active')) {
			document.body.style.paddingRight = scrollWidth;
		} else {
			document.body.style.paddingRight = 0;
		}
	});

	searchBtn.addEventListener('click', () => {
		searchForm.style.display = 'block';
		headerNav.style.display = 'none';
		headerPhone.style.display = 'none';
		headerCloseBtn.style.display = 'block';
	});
	headerCloseBtn.addEventListener('click', () => {
		searchForm.style.display = 'none';
		headerNav.style.display = 'block';
		headerPhone.style.display = 'block';
		headerCloseBtn.style.display = 'none';
	});

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