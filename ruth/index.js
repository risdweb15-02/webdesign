$(document).ready(function(){
	$("a").hover(function(){
		$(this).css("color","pink");
	});
	$("a").mouseleave(function(){
		$(this).css("color","black");
	});
});