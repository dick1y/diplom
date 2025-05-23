new Swiper('.popular-categories__slider',{
	pagination:{
			el:'.swiper-pagination',
			//Буллеты
			clickable: true,			
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
		spaceBetween: 30,
		//Автовысота
		autoHeight: false,
		
		//Количество слайдов для показа
		slidesPerView: 1,
		
		//Отключение функционала
		//если слайдов меньше чем нужно
		watchOverflow: true,

		
		//Количество пролистываемых слайдов
		slidesPerGroup: 1,
		
		//Количество дублирующих слайдов
		loopedSlides: 0,		
		//Эффекты переключения слайдов
		//Листание
		effect: 'slide',
	    
	
});