$(function(){
	var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        direction: 'horizontal',
        effect : 'fade',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 0,
        mousewheelControl: true,
        onTouchMove: function(swiper){
	       swiper.lockSwipeToNext();
    	   swiper.lockSwipeToPrev();
    	   setTimeout(function(){
	    	   	swiper.unlockSwipeToNext();
	    	    swiper.unlockSwipeToPrev();
    	   },500)
	    }
    });
    
});