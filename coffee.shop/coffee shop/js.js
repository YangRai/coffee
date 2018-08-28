$(document).ready(function(){
	$('#menu h1').click(function(){
		$('#wrapper').css("left",'5%')
		$('#menu').css('right','-30%')
		$('#inner-container').css("opacity",'0.8')
	
		$('#logo').fadeOut(1000);
		$('.banner').fadeOut(1000);


	});

		$('#MenuIcon').click(function(){
		$('#wrapper').css("left",'5%')
		$('#menu').css('right','-30%')
		$('#inner-container').css("opacity",'0.8')
	
		$('#logo').fadeOut(1000);
		$('.banner').fadeOut(1000);


	});

	$('.one-1').click(function(){
		$('#wrapper').css('left','-100%')
		$('.coffee-page').css('display','block')
		.css('left','0')
		$('#wrapper h1').css("display",'none')
		$('#logo').fadeOut(1000);
		});

	$('.back').click(function(){
		$('.coffee-page').css('display','none')
		$('#wrapper').css("left",'5%')
		$('#menu').css('right','-30%')
		$('#wrapper h1').css("display",'block')
		
	});


	$('.one-2').click(function(){
		$('#wrapper').css('left','-100%')
		$('.sandwich-page').css('display','block')
		.css('left','0')
		$('#wrapper h1').css("display",'none')
		$('#logo').fadeOut(1000);
		});

	$('.back2').click(function(){
		$('.sandwich-page').css('display','none')
		$('#wrapper').css("left",'5%')
		$('#menu').css('right','-30%')
		$('#wrapper h1').css("display",'block')
		
	});



		$('.one-3').click(function(){
		$('#wrapper').css('left','-100%')
		$('.desert-page').css('display','block')
		.css('left','0')
		$('#wrapper h1').css("display",'none')
		$('#logo').fadeOut(1000);
		});

	$('.back3').click(function(){
		$('.desert-page').css('display','none')
		$('#wrapper').css("left",'5%')
		$('#menu').css('right','-30%')
		$('#wrapper h1').css("display",'block')
		
	});




	$('.close').click(function(){

		$('#wrapper').css('left','-100%')
		$('#inner-container').css('opacity','0.5')
		$('#menu').css('right','10%')
		$('#logo').css('display','block ');
		$('.banner').css('display','block');


	});


	$(".about-us h2").click(function(){

		$('#about-us').css('bottom','0%');

	})

	$('.abt-close').click(function(){

		$('#about-us').css('bottom','-100%');

	});

});








