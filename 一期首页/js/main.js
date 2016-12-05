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
    // 登录注册页面 跳转iframe
    $(".register").click(function() {
        $(".lr").attr("src","../前台页面/register.html").show()
    });
    $(".login").click(function() {
        $(".lr").attr("src","../前台页面/login.html").show()
    });
});