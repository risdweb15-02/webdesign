$(document).ready(function(){
	$("#demosMenu").change(function(){
	  window.location.href = $(this).find("option:selected").attr("id") + '.html';
	});
    
    $('.pull-me').click(function(){
        $('.panel').slideToggle('slow');
    });

    $('.pull-me').click(function(){
        $('.panel_1').slideToggle('slow');
    });
    
    $('.pull-me_1').click(function(){
        $('.panel_1').slideToggle('slow');
    });    
    $('.pull-me_2').click(function(){
        $('.panel_1').slideToggle('slow');
    });     
    $('.pull-me_3').click(function(){
        $('.panel_1').slideToggle('slow');
    });      
	$('.putover').click(function(){  
	   	$('.putover').css('opacity',1);
	   });  
	$('.putover1').click(function(){  
	   	$('.putover1').css('opacity',1);
	   }); 
	$('.putover2').click(function(){  
	   	$('.putover2').css('opacity',1);
	   }); 
	$('.putover3').click(function(){  
	   	$('.putover3').css('opacity',1);
	   }); 	
	$('.putover3_1').click(function(){  
	   	$('.putover3_1').css('opacity',1);
	   }); 
	$('.hover img').css('opacity', 0.4);  
	$('.hover p').hover(  
	   function(){  
	      $(this).find('img').stop().fadeTo('slow', 1);  
	   },  
	   function(){  
	      $(this).find('img').stop().fadeTo('slow', 0.4);  
	   });  

	/*$('.text').hide();
    $('#slide1').animate({opacity:1});

    $('#slide1').hover(function() {
        $(this).stop().animate({opacity:.4},200);
        $('.text').fadeIn();

    }, function() {
        $(this).stop().animate({opacity:1},500)
        $('.text').fadeOut();
    });	*/

	$('#slide1').hover(
		function(){

			$(this).find('.text').slideDown(250);
		},
		function(){
			$(this).find('.text').slideUp(250);
		}
	);

	$('#slide2').hover(
		function(){

			$(this).find('.text').slideDown(250);
		},
		function(){
			$(this).find('.text').slideUp(250);
		}
	);

	$('#slide3').hover(
		function(){

			$(this).find('.text').slideDown(250);
		},
		function(){
			$(this).find('.text').slideUp(250);
		}
	);

	$('#slide4').hover(
		function(){

			$(this).find('.text').slideDown(250);
		},
		function(){
			$(this).find('.text').slideUp(250);
		}
	);

	$('#slide5').hover(
		function(){

			$(this).find('.text').slideDown(250);
		},
		function(){
			$(this).find('.text').slideUp(250);
		}
	);

	$('#slide6').hover(
		function(){

			$(this).find('.text').slideDown(250);
		},
		function(){
			$(this).find('.text').slideUp(250);
		}
	);

	$('#slide7').hover(
		function(){

			$(this).find('.text').slideDown(250);
		},
		function(){
			$(this).find('.text').slideUp(250);
		}
	);


	$('#slide8').hover(
		function(){

			$(this).find('.text').slideDown(250);
		},
		function(){
			$(this).find('.text').slideUp(250);
		}
	);

	$('#slide9').hover(
		function(){

			$(this).find('.text').slideDown(250);
		},
		function(){
			$(this).find('.text').slideUp(250);
		}
	);

	$('#slide10').hover(
		function(){

			$(this).find('.text').slideDown(250);
		},
		function(){
			$(this).find('.text').slideUp(250);
		}
	);
	$('#slide11').hover(
		function(){

			$(this).find('.text').slideDown(250);
		},
		function(){
			$(this).find('.text').slideUp(250);
		}
	);
	$('#slide12').hover(
		function(){

			$(this).find('.text').slideDown(250);
		},
		function(){
			$(this).find('.text').slideUp(250);
		}
	);
	$('#slide13').hover(
		function(){

			$(this).find('.text').slideDown(250);
		},
		function(){
			$(this).find('.text').slideUp(250);
		}
	);
	$('#slide14').hover(
		function(){

			$(this).find('.text').slideDown(250);
		},
		function(){
			$(this).find('.text').slideUp(250);
		}
	);
	$('#slide15').hover(
		function(){

			$(this).find('.text').slideDown(250);
		},
		function(){
			$(this).find('.text').slideUp(250);
		}
	);					

});



