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