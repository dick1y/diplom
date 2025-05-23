	new Swiper('.catalog-slider__items',{
		
		pagination:{
			el:'.swiper-pagination',
			//Буллеты
			clickable: true,			
		},
		breakpoints: {
			320: {
		        slidesPerView: 1,
		    },
		    450: {
		        slidesPerView: 2,
		    },
		    767: {
		        slidesPerView: 3,
		    },
		    1022: {
		        slidesPerView: 3,
		    },
		    1219: {
		        slidesPerView: 5,
		    }
		},
		//Переключение при клике на слайд
		slideToClickedSlide: false,

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

		//Автовысота
		autoHeight: false,
		
		//Количество слайдов для показа
		slidesPerView: 5,
		
		//Отключение функционала
		//если слайдов меньше чем нужно
		watchOverflow: true,
		
		//Отступ между слайдами
		spaceBetween: 10,
		
		//Количество пролистываемых слайдов
		slidesPerGroup: 1,
		
		//Активный слайд по центру
		centeredSlides: false,
	
		//Бесконечный слайдер
		loop: false,
		
		//Количество дублирующих слайдов
		loopedSlides: 0,		
		//Эффекты переключения слайдов
		//Листание
		effect: 'slide',	
		
	});
	new Swiper('.catalog-slider__items2',{
		
		pagination:{
			el:'.swiper-pagination',
			//Буллеты
			clickable: true,			
		},
		breakpoints: {
		    319: {
		        slidesPerView: 2,
		    },
		    767: {
		        slidesPerView: 3,
		    },
		    1022: {
		        slidesPerView: 3,
		    },
		    1219: {
		        slidesPerView: 3,
		    }
		},
		//Переключение при клике на слайд
		slideToClickedSlide: false,

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

		//Автовысота
		autoHeight: false,
		
		//Количество слайдов для показа
		slidesPerView: 3,
		
		//Отключение функционала
		//если слайдов меньше чем нужно
		watchOverflow: true,
		
		//Отступ между слайдами
		spaceBetween: 0,
		
		//Количество пролистываемых слайдов
		slidesPerGroup: 1,
		
		//Активный слайд по центру
		centeredSlides: false,
	
		//Бесконечный слайдер
		loop: false,
		
		//Количество дублирующих слайдов
		loopedSlides: 0,		
		//Эффекты переключения слайдов
		//Листание
		effect: 'slide',	
		
	});