$(document).ready(function() {

	
    $("#about").click(function(){
		$("#intro").animate({opacity:"1"});
	});


    $("#title").mouseleave(function(){
		$("#intro").animate({opacity:"0"});
	});


	$("#pic1").mouseenter(function(){
		$("#nicoleQuote").animate({opacity:"1"});
	});

	/*$("#pic1").mouseenter(function(){
		$("#nicole").css('background-color','rgba(0,138,239,0.3)');

	});*/

	$("#pic1").mouseleave(function(){
		$("#nicoleQuote").animate({opacity:"0"});
	});

    /*$("#pic1").mouseleave(function(){
		$("#nicole").css('background-color','rgba(255,255,255,0.3)');

	});*/

   
   






   $("#pic4").mouseenter(function(){
		$("#chirstinaQuote").animate({opacity:"1"});
	});

	$("#pic4").mouseleave(function(){
		$("#chirstinaQuote").animate({opacity:"0"});
	});

	

	
	$("#pic2").mouseenter(function(){
		$("#romanQuote").animate({opacity:"1"});
	});

	$("#pic2").mouseleave(function(){
		$("#romanQuote").animate({opacity:"0"});
	});


});