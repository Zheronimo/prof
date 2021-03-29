document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
		const menu = document.querySelector('.header__menu');
		const header = document.querySelector('.header');
		let scrollWidth = window.innerWidth - document.body.offsetWidth +'px';

    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        menu.classList.toggle('active');
		document.body.classList.toggle('lock');

			
        if(menu.classList.contains('active')) {
            header.style.paddingRight = scrollWidth;
            document.body.style.paddingRight = scrollWidth;
            menu.style.paddingRight = scrollWidth;

        }else {
            header.style.paddingRight = 0;
            document.body.style.paddingRight = 0;
            menu.style.paddingRight = 0;
        }
	});

    const swiper = new Swiper('.hero__promotion', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                if(index>=9){
                    return '<span class="' + className + '">' + (index + 1) + '</span>';
                } else {
                    return '<span class="' + className + '">0' + (index + 1) + '</span>';
                }
                
            },
        },
    });
});
