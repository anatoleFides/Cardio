$(document).ready(function(){

	//slider
	$("#slider_container").owlCarousel(
		{
		items: 1, 
		loop: true,
		autoplay:true,
		smartSpeed:1000,
		autoplayTimeout:2000,  	   
	});

	//button gamburger menu
	$('.navbar-toggle').click(function(){
		$(this).toggleClass('open');
	});
});