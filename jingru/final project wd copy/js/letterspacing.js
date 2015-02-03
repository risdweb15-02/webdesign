var changespacing=function(){
	$('.artist li').hover(function() {
		$(".artist li a").css(
           “letter-spacing”:"4px" );
	});
}



$(document).ready(changespacing);