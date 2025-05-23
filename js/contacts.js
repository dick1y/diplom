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