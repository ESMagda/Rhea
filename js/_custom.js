window.addEventListener('DOMContentLoaded', function(){
    

    $('.places_carousel').owlCarousel({
		items: 3,
		loop: true,
		nav: true,
		navText: ['<i class="fas fa-long-arrow-alt-left"></i>','<i class="fas fa-long-arrow-alt-right"></i>'],
		smartSpeed: 700,
		dots: false, 
		center: true, 
		margin: 40,
		responsive: {
			320 : {
				items: 2,
				center: false
			},
			768 : {
				margin: 20,
			},
			1024 : {
				margin: 40,
			}
		} 
	});

	$('.exp_carousel').owlCarousel({
		items: 1,
		loop: true,
		nav: true,
		navText: ['<i class="fas fa-long-arrow-alt-left"></i>','<i class="fas fa-long-arrow-alt-right"></i>'],
		dots: true,
		smartSpeed: 700,
	});

	$('.categories_carousel').owlCarousel({
		items: 5,
		loop: true,
		nav: true,
		navText: ['<i class="fas fa-long-arrow-alt-left"></i>','<i class="fas fa-long-arrow-alt-right"></i>'],
		dots: false,
		smartSpeed: 700,
		autoWidth:true,
		margin: 15,
		center: true,
		responsive: {
			
		}
	});

	(function() {
		$(".toggle")[0].addEventListener( "click", function(e) {
		console.log('click 1');
		e.preventDefault();
		if(this.classList.contains("is-active") === true){
		this.classList.remove("is-active");
		$('.top_line_menu').removeClass("activeMenu");
		} else {
		this.classList.add("is-active");
		$('.top_line_menu').addClass("activeMenu");
		}
		});
		
		$(document).click(e => {
			if(window.innerWidth < 1024) {
				if( !$(e.target).closest('.toggle')[0] ){
				$(".toggle").removeClass("is-active");
				$('.top_line_menu').removeClass("activeMenu");
				}
			}
		});
	})();


	$(window).on('load', function(){
		$('.preloader').delay(1000).fadeOut('slow');
	});

	$(window).scroll(function(){
		if($(this).scrollTop() > $(this).height() - 400) {
			$('.top').addClass('active');
		} else {
			$('.top').removeClass('active');
		}
	});
	$('.top').click(function(){
		$('html,body').stop().animate({scrollTop: 0}, 'slow', 'swing');
	});

	$('.help_video a').on('click', function (e){
		e.preventDefault();
		var newLink = $(this).attr('href');
		// console.log($(this).attr('href'));
		$('.video_source').attr('src', newLink);
		$('.video_play')[0].load();
		$('.video_play')[0].play();
	});


});