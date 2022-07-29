$(document).ready(function(){
	$('.intro_slider').slick({
		dots: true,
  		infinite: true,
  		autoplay: true,
  		speed: 1000,
  		arrows: false,
  		fade: true,
  		cssEase: 'linear',
		adaptiveHeight: true
	});
	$('.services').slick({
		infinite: true,
		slidesToShow: 5,
		adaptiveHeight: true,
		responsive: [
	    {
		    breakpoint: 1700,
		    settings: {
			    slidesToShow: 4,
		    }
	    },
	    {
	    	breakpoint: 766,
	    	settings: {
	    		slidesToShow: 1,
	    		dots: true,
	    		arrows: false,
	    		fade: true,
  				cssEase: 'linear'
	    	}
	    }
	    ]
	});
	$('.incredible_views').slick({
		dots: false,
  		infinite: true,
  		speed: 500,
		adaptiveHeight: true,
		fade: true,
		cssEase: 'linear',
		responsive: [
	    {
	    	breakpoint: 800,
	    	settings: {
	    		dots: true,
	    		arrows: false
	    	}
	    }
	    ]
	});
	$('.advantage__input').click(function (event){

		if (parseInt($(this).attr('value')) % 2 === 0){
			$(this).prop('checked', true);
			$(this).prop('value', 1)
		}
		else{
			$(this).prop('checked', false);
			$(this).prop('value', 0)
		}
		id = $(this).attr('id')
		$('.advantage__input').each(function(index, value){
			if ($(value).attr('id') !== id){
				$(value).prop('value', 0);
			}
		});	
	});
	$(".slick-dots").each(function(){
		$(this).addClass('animate__animated');
		$(this).addClass('animate__fadeIn');
	});
	$('.header .burger').click(function (event) {
		$('.mobile_menu').toggleClass('active');
		$('body').toggleClass('overflowHidden');
	});
	$('.header .theme a, .mobile_menu .menu_footer .controllers .theme_controller .custom_checkbox').click(function (event) {
		event.preventDefault();
		if ($("#theme").attr("href") === "css/light-mode.css") {
	        $("#theme").attr("href","css/dark-mode.css");
	        $(".theme_controller .custom_checkbox").checked = false;
	    }
	    else {
	        $("#theme").attr("href","css/light-mode.css");
	        $(".theme_controller .custom_checkbox").checked = false;
	    }  
		$('#theme');
		
	});
	$('.additional').click(function(event){
		event.preventDefault();
		$('.hide_in_mobile').toggleClass('active');
		if ($('.additional').text() === "Подробнее..."){
			$('.additional').text("Скрыть");
		}
		else{
			$('.additional').text("Подробнее...");
		}
	})
	
});