$('.filter-block-show-more').on('click', function() {
      $('.f_more').toggleClass('f_more--open')
	  $('.filter-block-show-more__label').toggleClass('filter-block-show-more__label--dn')
	  $('.filter-block-show-more__label2').toggleClass('filter-block-show-more__label2--active')
	 $('.filter-block-show-more__arrow').toggleClass('filter-block-show-more__arrow--active')
});