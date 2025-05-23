$('.options__filter-show-more').on('click', function() {
    $('.options__more').toggleClass('options__more--open')
    $('.options__filter-show').toggleClass('options__filter-show--none')
    $('.options__filter-hide').toggleClass('options__filter-hide--active')
    $('.options__filter-arrow').toggleClass('options__filter-arrow--active')
});

$('.mobile-filter__btn').click(function(){
	$('body').width($('body').width());
	$('body').css('overflow', 'hidden');
	$('#catalog_filter').addClass('open');
});
$('.filters__catalog-close').click(function(){
	$('body').removeAttr('style');
	$('#catalog_filter').removeClass('open');
});
$('.sort__name').click(function(){
    $(this).next().addClass('active');
});