  $(document).ready(function () {
   
    var mySwiper = new Swiper ('.swiper-container', {
      
      direction: 'horizontal',
      loop: true,

        pagination: {
   			el: '.swiper-pagination',
    		type: 'bullets',
    		clickable: true
    	 },
    	 autoplay: {
   			 delay: 4500,
   			 disableOnInteraction: false
 		 },
 		 navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
 		 speed: 650,
 		 simulateTouch: false,
    })
  });
