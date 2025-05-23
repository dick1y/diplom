new Swiper('.promotions__slider',{
	pagination:{
			el:'.swiper-pagination',
			//Буллеты
			clickable: true,			
		},
		
		//Переключение при клике на слайд
		slideToClickedSlide: false,
		autoplay: {
			delay: 3000,
			stopOnLastSlide: false,
			disableOnInteraction: false
		},
		speed: 800,

		//Управление клавиатурой
		keyboard:{
			//Включить/выключить
			enabled: true,
			//Включить/выключить
			//только когда слайдер в пределах вьюпорта
			onlyInViewport: true,
			//Включить/выключить
			//управление клавишами pageUp, pageDown
			pageUpDown: true,
		},
		spaceBetween: 10,
		//Автовысота
		autoHeight: false,
		
		//Количество слайдов для показа
		slidesPerView: 3,
		
		//Отключение функционала
		//если слайдов меньше чем нужно
		watchOverflow: true,
		
		
		//Количество пролистываемых слайдов
		slidesPerGroup: 3,
		
		//Активный слайд по центру
		centeredSlides: false,
	
		//Бесконечный слайдер
		loop: false,
		
		//Количество дублирующих слайдов
		loopedSlides: 0,		
		//Эффекты переключения слайдов
		//Листание
		effect: 'slide',
	    
	    breakpoints: {
		    319: {
		        slidesPerView: 1,
				slidesPerGroup: 1,
		    },
		    550: {
		        slidesPerView: 2,
				slidesPerGroup: 2,
		    },
		    1022: {
		        slidesPerView: 3,
		    },
		   
		    
		},
});

// new Swiper('.promotions__slider2',{
// 		//Переключение при клике на слайд
// 		slideToClickedSlide: false,

// 		//Управление клавиатурой
// 		keyboard:{
// 			//Включить/выключить
// 			enabled: true,
// 			//Включить/выключить
// 			//только когда слайдер в пределах вьюпорта
// 			onlyInViewport: true,
// 			//Включить/выключить
// 			//управление клавишами pageUp, pageDown
// 			pageUpDown: true,
// 		},

// 		//Автовысота
// 		autoHeight: false,
		
// 		//Количество слайдов для показа
// 		slidesPerView: 1,
		
// 		//Отключение функционала
// 		//если слайдов меньше чем нужно
// 		watchOverflow: true,
		
		
// 		//Количество пролистываемых слайдов
// 		slidesPerGroup: 1,
		
// 		//Активный слайд по центру
// 		centeredSlides: false,
	
// 		//Бесконечный слайдер
// 		loop: false,
		
// 		//Количество дублирующих слайдов
// 		loopedSlides: 0,		
// 		//Эффекты переключения слайдов
// 		//Листание
// 		effect: 'slide',
		
		
// });