$(document).ready(function(){
	$("#debug" ).click(function(){
		$( "#salutation").animate({top: "-=200px", opacity:"0"}, {duration:500});
		$( "#frame").animate({top: "-=200px", opacity:"0"}, {duration:500});
		$( "#square").animate({top: "-=200px", opacity:"0"}, {duration:500});
		$( "#shit").animate({top: "-=200px", opacity:"0"}, {duration:500});
		$( "#intro").css("opacity","0");
		$( "#intro").animate({top: "-=200px", opacity:"1"}, {duration:500});
		$( "#click").css("opacity","0");
		$( "#click").animate({top: "-=200px", opacity:"1"}, {duration:500});
		$( "#debug").fadeOut();
	});
	var scrollPosition = [
		self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
		self.pageYOffset || document.documentElement.scrollTop  || document.body.scrollTop
	];
	var html = jQuery('html'); 
	html.data('scroll-position', scrollPosition);
	html.data('previous-overflow', html.css('overflow'));
	html.css('overflow', 'hidden');
	window.scrollTo(scrollPosition[0], scrollPosition[1]);
});

