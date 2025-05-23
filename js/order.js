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