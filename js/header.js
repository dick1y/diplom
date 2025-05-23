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