
/****************************************************************************
								SLIDERS SWIPER
***************************************************************************/


	new Swiper('.slider-main',{
		//Стрелки
		navigation:{
			nextEl:'.swiper-button-next',
			prevEl:'.swiper-button-prev'
		},

		//Автовысота
		autoHeight: false,
		
		//Количество слайдов для показа
		//slidesPerView: 'auto',
		slidesPerView: 1,
		
		//Отключение функционала
		//если слайдов меньше чем нужно
		watchOverflow: true,
		
		//Количество пролистываемых слайдов
		slidesPerGroup: 1,
		
		
		//Бесконечный слайдер
		loop: false,
		
		//Количество дублирующих слайдов
		loopedSlides: 0,		
	
		//Скорость
		speed: 300,
		
		//Эффекты переключения слайдов
		//Листание
		effect: 'slide',
		
		//миниатюры (превью)
		thumbs:{
			//свайпер с миниатюрами и его настройки
			swiper:{
				el: '.slider-mini',
				slidesPerView: 5,
				navigation:{
					nextEl:'.swiper-button-next',
					prevEl:'.swiper-button-prev'
				},				
			},
		},	
	});

	//Слайдер в слайдере
	new Swiper('.image-in-slider',{
		//Курсор перетаскивания
		grabCursor: true,
		//Навигация
		//Пагинация, текущее положение, прогрессбар
		pagination:{
			el:'.swiper-pagination',
			//Буллеты
			clickable: true,
		},
		//Корректная работа
		//перетаскивания/свайпа
		//для дочернего слайдера
		nested: true,
	});	

	new Swiper('.main_banner__slider',{
		//Курсор перетаскивания
		grabCursor: true,
		//Навигация
		//Пагинация, текущее положение, прогрессбар
		pagination:{
			el:'.swiper-pagination',
			//Буллеты
			clickable: true,
		},
		//Корректная работа
		//перетаскивания/свайпа

		//Количество слайдов для показа
		//slidesPerView: 'auto',
		slidesPerView: 1,
		
		//Отключение функционала
		//если слайдов меньше чем нужно
		watchOverflow: true,
		
		//Количество пролистываемых слайдов
		slidesPerGroup: 1,
		
		pagination:{
			el:'.swiper-pagination',
			//Буллеты
			clickable: true,
		},
	});	





	


/** TABS **/
    // $('.offers-nav__tabs .offers-nav__tab:first-child').addClass('offers-active__tab');
    // $('.offers-content__tabs .offers-item__tab').hide('fast');
    // $('.offers-content__tabs .offers-item__tab:first-child').show('fast');

    // $('.offers-nav__tab').click(function(e) { 
    //    	tab = $(this).attr('data_tab');
    //     $(this).parents('.offers-nav__tabs').find('.offers-nav__tab').removeClass('offers-active__tab');
    //     $(this).addClass('offers-active__tab');
    //     $(this).parents('.offers-nav__tabs').next().find('.offers-item__tab').hide('fast');
    //     $(tab).show('fast');

    // });

/*******************************************************
			SELECT CITY
*******************************************************/
	if ( !window.location.href.endsWith("https://test.webnavigator.kz/") ) {$(".city-select").toggleClass("city-active");}
	$('.top-menu__city-inner').click(function(){
		$(this).parent().next().toggleClass("city-active");
	});
	$('.btn__yes').click(function(){
		$(".city-select").toggleClass("city-active");
	});
	$('.btn__no').click(function(){
		$(".city-select").toggleClass("city-active");
	});

/***************************************************************************
								Overlay
****************************************************************************/ 
$(document).ready(function(){

	//Сравнение
	$('.overlay').mouseover(function(){
		$('#overlay').css({"opacity":"1", "visibility":"visible"});
	});
	$('.overlay').mouseleave(function(){
		$('#overlay').css({"opacity":"0", "visibility":"hidden"});
	});
	$('.hidden_block').hover(function(){
		$(this).prev().find('.tr_pointer').toggleClass('on');
	});
	
	//корзина
	$('.basket-overlay').mouseover(function(){
		$('#basket-overlay').css({"opacity":"1", "visibility":"visible"});
	});
	$('.basket-overlay').mouseleave(function(){
		$('#basket-overlay').css({"opacity":"0", "visibility":"hidden"});
	});
	$('.hidden_block').hover(function(){
		$(this).prev().find('.tr_pointer').toggleClass('on');
	});	
	//главный блок
	$('.main-block__left-item').mouseover(function(){
		$(this).find('.menu-hidden-overlay').css({"opacity":"1", "visibility":"visible"});
	});
	$('.main-block__left-item').mouseleave(function(){
		$(this).find('.menu-hidden-overlay').css({"opacity":"0", "visibility":"hidden"});
	});
	//Кабинет
	$('.cabinet-overlay').mouseover(function(){
		$('#cabinet-overlay').css({"opacity":"1", "visibility":"visible"});
	});
	$('.cabinet-overlay').mouseleave(function(){
		$('#cabinet-overlay').css({"opacity":"0", "visibility":"hidden"});
	});
	

});

/****************************************************************************
							СОРТИРОВКА В КАТАЛОГЕ ТОВАРОВ
****************************************************************************/

$('.see_select li a').click( function() {
 sort = $(this).attr("data-sort");
 $.cookie('page_count', sort, {path: '/'});
 location.reload();
 return false;});
$('.sort_price').click(function() {
    if($(this).hasClass('red')){
        if($(this).hasClass('up')){
            $(this).removeClass('up');
            sort = $(this).attr("data-sort");
            let str = sort;
            let arr = str.split('-');
            sort = arr[0]+'-1';
        } else{
            $(this).addClass('up');
            sort = $(this).attr("data-sort");
            let str = sort;
            let arr = str.split('-');
            sort = arr[0]+'-2';
        }
    }else{
        sort = $(this).attr("data-sort");
        let str = sort;
        let arr = str.split('-');
        sort = arr[0]+'-1';
        $(this).parents('.sort_list').find('.sort_name').removeClass("red");
        $(this).parents('.sort_list').find('.sort_name').removeClass("up");
        $(this).addClass("red");
        $(this).find('.arrow_up_ico').toggleClass("rotate");
    }
    $.cookie('sort', sort, {path: '/'});
    location.reload();
    return false;
});
$('.sort_name').click(function() {
    if($(this).hasClass('red')){
        if($(this).hasClass('up')){
            $(this).removeClass('up');
            sort = $(this).attr("data-sort");
            let str = sort;
            let arr = str.split('-');
            sort = arr[0]+'-1';
        }else{
            $(this).addClass('up');
            sort = $(this).attr("data-sort");
            let str = sort;
            let arr = str.split('-');
            sort = arr[0]+'-2';
        }
    }else{
        sort = $(this).attr("data-sort");
           let str = sort;
        let arr = str.split('-');
           sort = arr[0]+'-1';
        $(this).parents('.sort_list').find('.sort_price').removeClass("red");
        $(this).parents('.sort_list').find('.sort_price').removeClass("up");
        $(this).addClass("red");
        $(this).find('.arrow_up_ico').toggleClass("rotate");
    }
    $.cookie('sort', sort, {path: '/'});
    location.reload();
    return false;
});