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