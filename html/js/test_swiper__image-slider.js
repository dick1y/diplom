/*Инициализация Swiper*/
	new Swiper('.test_swiper__image-slider',{
		//Стрелки
		navigation:{
			nextEl:'.swiper-button-next',
			prevEl:'.swiper-button-prev'
		},
		/*Навигация*/
		/*Буллеты, текущее положение, прогрессбар*/
		pagination:{
			el:'.swiper-pagination',
			//Буллеты
			/*type: 'bullets',*/
			/*clickable: true,*/
			//Динамические буллеты
			/*dynamicBullets: true,*/
			//Кастомные буллеты
			/*renderBullet: function(index, className){
				return '<span class="' + className + '">' + (index + 1) + '</span>';
			}*/
			//Фракции
			type: 'fraction',
			renderFraction: function(currentClass, totalClass){
				return 'Фото <span class="' + currentClass + '"></span>' +
					' из ' +
					'<span class="' + totalClass + '"></span>';
			},
			/*
			//Прогрессбар
			type: 'progressbar',*/
		},
		//Скролл
		scrollbar:{
			el:'.swiper-scrollbar',
			//Возможность перетаскивать скрол
			draggable: true
		},
		
		// Включение/отключение
		//перетаскивания на ПК
		simulateTouch: true,
		//Чувствительность свайпа
		touchRatio: 1,
		//Угол срабатывания свайпа/перетаскивания
		touchAngle: 45,
		//Курсор перетаскивания
		grabCursor: true,
		
		//Переключение при клике на слайд
		slideToClickedSlide: false,
		/*
		//Навигация по хешу
		hashNavigation:{
			//Отслеживать состояние с помощью стрелок браузера
			watchState: true,
		},*/
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
		/*
		//Управление колесом мыши
		mousewheel:{
			//Чувствительность колеса мыши
			sensitivity: 1,
			//Класс объекта на котором
			//будет срабатывать прокрутка мышю
			eventsTarget: '.test_swiper__image-slider'
		},*/
		//Автовысота
		autoHeight: false,
		
		//Количество слайдов для показа
		//slidesPerView: 'auto',
		slidesPerView: 3,
		
		//Отключение функционала
		//если слайдов меньше чем нужно
		watchOverflow: true,
		
		//Отступ между слайдами
		spaceBetween: 30,
		
		//Количество пролистываемых слайдов
		slidesPerGroup: 1,
		
		//Активный слайд по центру
		centeredSlides: false,
		
		//Стартовый слайд
		initialSlide: 0,
		
		//Мультирядность
		slidesPerColumn: 1,
		
		//Бесконечный слайдер
		loop: false,
		
		//Количество дублирующих слайдов
		loopedSlides: 0,
		
		//Свободный режим
		//freeMode: true,
		
		/*
		//Автопрокрутка
		autoplay:{
			//Пауза между прокруткой
			delay: 1000,
			//Закончить на последнем слайде
			stopOnLastSlide: false,
			//Отключить после ручного переключения
			disableOnInteraction: false,
		},*/
		
		//Скорость
		speed: 300,
		
		/*
		//Вертикальный слайдер
		direction: 'vertical',*/
		
		
		//Эффекты переключения слайдов
		//Листание
		effect: 'slide',
		
		/*
		//Смена прозрачности
		effect: 'fade',
		
		//Дополнение к 'fade'
		fadeEffect:{
			//Параллельная  смена прозрачности
			crossFade: true
		},*/
		
		/*
		//Переворот
		effect: 'flip',
		
		//Дополнение к 'flip'
		flipEffect:{
			//Тень
			slideShadows: true,
			//Показ только активного слайда
			limitRotation: true
		},*/
		
		/*
		//Куб
		effect: 'cube',		
		
		//Дополнение к 'cube'
		cubeEffect:{
			//Настройки тени
			slideShadows: true,
			shadow: true,
			ShadowOffset: 20,
			shadowScale: 0.94
		},*/

		/*
		//Эффект потока
		effect: 'coverflow',		
		
		//Дополнение к 'coverflow'
		coverflowEffect:{
			//Угол
			rotate: 20,
			//Наложение
			stretch: 50,
			//
			slideShadows: true
		},*/
		
		//Брейк пойнты(адаптив)
		//Ширина экрана
		breakpoints:{
			320:{
				slidesPerView: 1,
			},
			480:{
				slidesPerView: 2,
			},
			992:{
				slidesPerView: 3,
			},			
		},
		
		/*
		//Соотношение сторон
		breakpoints:{
			'@0.75':{
				slidesPerView: 1,
			},
			'@1.00':{
				slidesPerView: 2,
			},
			'@1.50':{
				slidesPerView: 3,
			},			
		},*/
		
		//Отключить предзагрузку картинок
		preloadImages: false,
		//Lazy Loading
		//подгрузка картинок
		lazy:{
			//Подгружать при старте
			//переключения слайда
			loadOnTransitionStart: false,
			//Подгрузить предыдущую
			//и следующую картинок
			loadPrevNext: false,
		},
		//Слежка за видимыми слайдами
		watchSlidesProgress: true,
		//Добавление класса видимым слайдом
		watchSlidesVisibility: true,
		
		//zoom картинки
		zoom:{
			//Максимальное увеличение
			maxRatio: 5,
			//Минимальное увеличение
			minRatio: 1,
		},
		
		//Обновить свайпер
		//при изменении элементов слайдера
		observer: true,
		observeParrents: true,
		observeSlideChildren: true,
	});