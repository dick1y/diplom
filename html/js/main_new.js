$('.menu__catalog').click(function(){
if ( document.documentElement.clientWidth < 992 ){
    
	$('body').width($('body').width());
	$('body').css('overflow', 'hidden');
	$(this).parents('.header').find('.mobile-menu').addClass('open');
}
});
$('.mobile-menu__close-btn').click(function(){
	$('body').removeAttr('style');
	$('.mobile-menu').removeClass('open');
});
/**************** sort ****************/
$('.sort_list li a').click( function() {
	sort = $(this).attr("data-sort");
	$.cookie('sort', sort, {path: '/'});
	location.reload();
	return false;
});
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
    $('.nav_tabs .tab:first-child').addClass('active__tab');
    $('.content_tabs .page_tab:first-child').show('slow');
    $('.nav_tabs .tab').click(function() { 
        tab = $(this).attr('data_tab');
        $(this).parents('.nav_tabs').find('.tab').removeClass('active_tab');
        $(this).addClass('active_tab');
        $(this).parents('.con_tabs').next().find('.page_tab').hide('slow');
        $(tab).show('slow');

    });

	$('.nav_tabs1 .tab:first-child').addClass('active_tab');
    $('.content_tabs1 .page_tab1:first-child').show('slow');
    $('.nav_tabs1 .tab').click(function() { 
        tab = $(this).attr('data_tab');
        $(this).parents('.nav_tabs1').find('.tab').removeClass('active_tab');
        $(this).addClass('active_tab');
        $(this).parents('.con_tabs1').next().find('.page_tab1').hide('slow');
        $(tab).show('slow');

    });

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
							СИСТЕМА РЕЙТИНГА
****************************************************************************/
$(document).ready(function(){
	$('.rate').raty({
		starOff: '/templates/wnmarket/img/catalog-slider/rate-star-off.png',
		starOn: '/templates/wnmarket/img/catalog-slider/rate-star.png',
	    click: function(score, evt) {
                $('.rate-gif').show(200);
                $('.rate-result').text('');			
            	$.ajax({
            	cache: false,    
            	dataType: "json",    
		        url: '/udata/content/rating/'+this.id+'/'+score+'.json',
		        
		        success: function(data) { 
		            $('.rate-gif').hide(200);
	                $('.rate-result').text(data.result);
	        	},
		        error: function(data) {
		            $('.rate-gif').hide(200);
		            $('.rate-result').text('Ошибка, попробуйте позже');
				}
		
		        });
		}
            	
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

if ( window.location.href.endsWith("/emarket/cart/") ) {
    var navPos_pos, winPos_pos, navHeight_pos;
    function refreshVar_pos() {
    	navPos_pos = $('.cart__atly').offset().top;
    	navHeight_pos = $('.cart__atly').outerHeight(true);
    }
    refreshVar_pos();
    $(window).resize(refreshVar_pos);
    $('<div class="clone_pos m0"></div>').insertBefore('.cart__atly').css('height', navHeight_pos).hide();
    $(window).scroll(function() {
    	if ( document.documentElement.clientWidth > 900 ){
    		winPos_pos = $(window).scrollTop();
    		if (winPos_pos >= navPos_pos) {
    			$('.cart__atly').addClass('sticky');  
    			$('.clone_pos').show();
    		}  
    		else {
    			$('.cart__atly').removeClass('sticky');
    			$('.clone_pos').hide();
    		}
    	}
    });

/*****************MINUS/PLUS*********************/
function input_change(input, count){
	max = input.data('max');
	//alert(JSON.stringify(input, null, 4));
	count = count < 1 ? 1 : count;
	if (max)
		count = count > max ? max : count;
	
	input.val(count);
	value_refresh(input);
}
var tt = false;
function value_refresh(input){
	count = Number(input.val());
	price = input.parents('.ttt-row-wrrap').find('.main_price span');
	price.text(Number(price.data('price'))*count) ;
	if (tt) clearTimeout(tt);
	tt = setTimeout(refresh_cart, 700, input);	
}

/*function refresh_cart(input){
	id = input.data('id');
	option = input.data('option');
	count = input.val();
	if (option){
		data = { 'amount': count, 'options[predzakaz]': option};
	}
	else{
		data = { 'amount': count};
	}
	$.ajax({
		url: '/udata/emarket/basket/put/element/'+id+'.json',
		data: data,
		type: 'POST',
		dataType: 'json',
		success: function(data) { 
			$('.cart-amount').text(data.summary.amount);
			$('.itog span').text(data.summary.price.actual);
			console.log(data);
		},
		error: function() {
			//alert('Произошла ошибка, повторите попытку позже');
		}
	});
};*/
    $('.my_minus').click(function () {
		input = $(this).parent().find('.quant');
        count = parseInt(input.val()) - 1;
		input_change(input, count); 
    });
    $('.my_plus').click(function () {
		input = $(this).parent().find('.quant');
        count = parseInt(input.val()) + 1;
        input_change(input, count);
    });

	$('.quant').keyup(function() { 
		input_change($(this),$(this).val());
	});
}
$('.filter-block-show-more').on('click', function() {
      $('.f_more').toggleClass('f_more--open')
	  $('.filter-block-show-more__label').toggleClass('filter-block-show-more__label--dn')
	  $('.filter-block-show-more__label2').toggleClass('filter-block-show-more__label2--active')
	 $('.filter-block-show-more__arrow').toggleClass('filter-block-show-more__arrow--active')
});
	new Swiper('.catalog-slider__items',{
		
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
	/******************************************************
					TABS
******************************************************/
$('.contacts__city:first-child').addClass('contacts__city--active');
$('.contacts__city-content__tab:first-child').show('slow');
$('.contacts__city').click(function(){
	tab = $(this).attr('data_tab');
	$(this).parents('.contacts__city-group').find('.contacts__city').removeClass('contacts__city--active');
	$(this).addClass('contacts__city--active');
	$(this).parents('.contacts__tabs').find('.contacts__city-content__tab').hide('slow');
	$("."+tab).show('slow');
});
	new Swiper('.main-block__slider',{
		//Курсор перетаскивания
		grabCursor: true,
		//Навигация
		//Пагинация, текущее положение, прогрессбар
		pagination:{
			el:'.swiper-pagination',
			//Буллеты
			clickable: true,
		},
		//Количество слайдов для показа
		//slidesPerView: 'auto',
		slidesPerView: 4,
		
		//Отключение функционала
		//если слайдов меньше чем нужно
		watchOverflow: true,
		
		//Количество пролистываемых слайдов
		slidesPerGroup: 4,
		
		observer: true,
		observeParents: true,
		observeSlideChildren: true,
		spaceBetween: 20,
	});
	new Swiper('.main-block__item-slider-1',{
		//Курсор перетаскивания
		//grabCursor: true,
		//Навигация
		//Пагинация, текущее положение, прогрессбар
		pagination:{
			el:'.swiper-pagination',
			//Буллеты
			clickable: true,
		},

		//Количество слайдов для показа
		//slidesPerView: 'auto',
		slidesPerView: 1,
		
		//Отключение функционала
		//если слайдов меньше чем нужно
		watchOverflow: true,
		
		//Количество пролистываемых слайдов
		slidesPerGroup: 1,
	});	

	new Swiper('.main-block__item-slider-2',{
		//Курсор перетаскивания
		//grabCursor: true,
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
	new Swiper('.main-block__item-slider-3',{
		//Курсор перетаскивания
		//grabCursor: true,
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
	new Swiper('.main-object__slider',{
	slidesPerView: 1,
	spaceBetween: 20,
    navigation:{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
	thumbs: {
		swiper: {
			el: '.main-object-mini-slider',
			slidesPerView: 3,
			direction: 'vertical'
		}
	},
});
/*****************MINUS/PLUS*********************/
function input_change(input, count){
	max = input.data('max');
	count = count < 1 ? 1 : count;
	if (max)
		count = count > max ? max : count;
	
	input.val(count);
	value_refresh(input);
}
var tt = false;
function value_refresh(input){
	count = Number(input.val());
	price = input.parents('.ttt-row-wrrap').find('.main_price span');
	price.text(Number(price.data('price'))*count) ;
	if (tt) clearTimeout(tt);
	tt = setTimeout(refresh_cart, 700, input);	
}

function refresh_cart(input){
	id = input.data('id');
	count = input.val();
	data = { 'amount': count};
	$.ajax({
		url: '/udata/emarket/basket/put/element/'+id+'.json',
		data: data,
		type: 'POST',
		dataType: 'json',
		success: function(data) { 
		    alert(JSON.stringify(data, null, 4));
			$('.cart-amount').text(data.summary.amount);
			$('.itog span').text(data.summary.price.actual);
			console.log(data);
		},
		error: function() {
			//alert('Произошла ошибка, повторите попытку позже');
		}
	});
};
    $('.minus').click(function () {
		input = $(this).parent().find('.quant');
        count = parseInt(input.val()) - 1;
		input_change(input, count); 
    });
    $('.plus').click(function () {
		input = $(this).parent().find('.quant');
        count = parseInt(input.val()) + 1;
        input_change(input, count);
    });

	$('.quant').keyup(function() { 
		input_change($(this),$(this).val());
	});



/******************************************************
					TABS
******************************************************/
$('.object-tabs__items .object-tabs__item:first-child').addClass('object-tabs__item--active');
$('.object-tabs__body .object-tabs__block:first-child').show('slow');
$('.object-tabs__item').click(function(e){
	tab = $(this).attr('data_tab');
	$(this).parents('.object-tabs__items').find('.object-tabs__item').removeClass('object-tabs__item--active');
	$(this).addClass('object-tabs__item--active');
	$(this).parents('.object-tabs__items').next().find('.object-tabs__block').hide('slow');
	$(tab).show('slow');
});
if ( window.location.href.endsWith("/emarket/order/") ) {
    $('.order__main-delivery .left-block__block:first-child').addClass('active');
    $('.order__main-delivery .left-block__block').click(function () {
    	$('.order__main-delivery .left-block__block').removeClass('active');
    	$(this).addClass('active');
    	$('.order__main-delivery .select-grid__right-block .more_description').removeClass('active');
    	$('input[name="delivery-id"]').val($(this).data('id'));
    	$('.order__main-delivery .order__select-grid .order__fancybox').html($(this).find('.left-block__description').html());	
    	
    	var str = $(this).find('.left-block__description').html().length;
    	str += $(this).find('.left-block__description').html().split(" ").length - 1;
    	
    	if ( str > 220){
    		var desctext = $(this).find('.left-block__description').html();
    		var newtext = desctext.slice(3, 220);
    		var a = newtext.split(' ');
    		a.splice(a.length-1,1);
    		newtext = a.join(' ');		
    
    		$('.order__main-delivery .order__select-grid .right-block__description').html(newtext+' ...');
    	    $('.order__main-delivery .order__select-grid .more_description').addClass('active');
    	}else{$('.order__main-delivery .order__select-grid .right-block__description').html($(this).find('.left-block__description').html());};
    });
    
    $('.order__main-payment .left-block__block:first-child').addClass('active');
    $('.order__main-payment .left-block__block').click(function () {
    	$('.order__main-payment .left-block__block').removeClass('active');
    	$(this).addClass('active');
    	$('.order__main-payment .select-grid__right-block .more_description').removeClass('active');
    	$('input[name="payment-id"]').val($(this).data('id'));
    	$('.order__main-payment .order__select-grid .order__fancybox').html($(this).find('.left-block__description').html());	
    	
    	var str = $(this).find('.left-block__description').html().length;
    	str += $(this).find('.left-block__description').html().split(" ").length - 1;
    	
    	if ( str > 220){
    		var desctext = $(this).find('.left-block__description').html();
    		var newtext = desctext.slice(3, 220);
    		var a = newtext.split(' ');
    		a.splice(a.length-1,1);
    		newtext = a.join(' ');		
    
    		$('.order__main-payment .order__select-grid .right-block__description').html(newtext+' ...');
    	    $('.order__main-payment .order__select-grid .more_description').addClass('active');
    	}else{$('.order__main-payment .order__select-grid .right-block__description').html($(this).find('.left-block__description').html());};
    });
    
    
        var navPos_pos, winPos_pos, navHeight_pos;
        function refreshVar_pos() {
        	navPos_pos = $('.order__atly').offset().top;
        	navHeight_pos = $('.order__atly').outerHeight(true);
        }
        refreshVar_pos();
        $(window).resize(refreshVar_pos);
        $('<div class="clone_pos m0"></div>').insertBefore('.order__atly').css('height', navHeight_pos).hide();
        $(window).scroll(function() {
        	if ( document.documentElement.clientWidth > 900 ){
        		winPos_pos = $(window).scrollTop();
        		if (winPos_pos >= navPos_pos) {
        			$('.order__atly').addClass('sticky');  
        			$('.clone_pos').show();
        		}  
        		else {
        			$('.order__atly').removeClass('sticky');
        			$('.clone_pos').hide();
        		}
        	}
        });
    
    /**************** basket ****************/
    $('.basket_btn_send').click( function() {
    	$(this).parents('form').submit();
    	return false;
    });
}
$('.personal-area__order-name').click(function (){
	$(this).toggleClass('personal-area__order-name--active');
	$(this).next().toggleClass('personal-area__order-content--active');
});

/******************************************************
					TABS
******************************************************/
$('.personal-area__item:first-child').addClass('personal-area__item--active');
$('.personal-area__tab:first-child').show('slow');
$('.personal-area__item').click(function(e){
	tab = $(this).attr('data_tab');
	$(this).parents('.presonal-area__tabs').find('.personal-area__item').removeClass('personal-area__item--active');
	$(this).addClass('personal-area__item--active');
	$(this).parents('.presonal-area__tabs').find('.personal-area__tab').hide('slow');
	$("."+tab).show('slow');
});
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
new Swiper('.promotions__slider',{
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
		    },
		    767: {
		        slidesPerView: 1,
		    },
		    1022: {
		        slidesPerView: 2,
		    },
		    1219: {
		        slidesPerView: 2,
		    },
		    1340: {
		        slidesPerView: 3,
		    }
		},
});

new Swiper('.promotions__slider2',{
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
		slidesPerView: 1,
		
		//Отключение функционала
		//если слайдов меньше чем нужно
		watchOverflow: true,
		
		
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