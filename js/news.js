$(function() {
$(window).scroll(function(){
        var wHeight=$(window).height();
        var scrollAmount=$(window).scrollTop();
        $('.scrollanime').each(function(){
            var targetPosition=$(this).offset().top;
            if(scrollAmount > targetPosition - wHeight + 60){
                $(this).addClass("fadeInDown");
                }
        });
    });
	});