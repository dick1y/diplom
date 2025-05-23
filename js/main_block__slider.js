
	var swiper = new Swiper(".swiper", {
		slidesPerView: "auto",
        pagination: {
        el: ".swiper__pagination",
        clickable: true
        },
		observer: true,
		observeParents: true,
        navigation: {
        nextEl: ".swiper__button-next",
        prevEl: ".swiper__button-prev"
        },
		watchOverflow: true,
		spaceBetween: 10,
		autoplay: {
			delay: 3000,
			stopOnLastSlide: false,
			disableOnInteraction: false
		},
		speed: 800
    });
	
	$(".offers-nav__tab").on("click", function() {
		tabs = $(this).parents('.offers__tabs-group');
		tabs.find(".offers-nav__tab").removeClass("offers-nav__tab-active");
		$(this).addClass("offers-nav__tab-active");
		tabs.find(".offers-item__tab").removeClass("offers-item__tab-active");
		tabs.find("div[data-item=\"content_"+$(this).attr("data-item")+"\"]").addClass("offers-item__tab-active");
	});