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