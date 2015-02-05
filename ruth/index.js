$(document).ready(function(){
	$("a").hover(function(){
		$(this).css("color","orange");
	});
	$("a").mouseleave(function(){
		$(this).css("color","black");
	});
});