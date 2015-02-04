$(document).ready(function(){
	var scrollPosition = [
		self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
		self.pageYOffset || document.documentElement.scrollTop  || document.body.scrollTop
	];
	var html = jQuery('html'); 
	html.data('scroll-position', scrollPosition);
	html.data('previous-overflow', html.css('overflow'));
	html.css('overflow', 'hidden');
	window.scrollTo(scrollPosition[0], scrollPosition[1]);

	$("#salvation").click(function(){
		$( "#h" ).animate({top: "-=1920px"}, {duration:500});
		$( "#p" ).animate({opacity:"1" }, {duration:500});
		$( "#image" ).animate({top:"-=1370px" }, {duration:500});
		$( "#imagetwo" ).animate({top:"-=1370px" }, {duration:500});
		$( "#video" ).animate({top:"-=1300px" }, {duration:500});
		$( "#meet" ).animate({top:"-=1200px" }, {duration:500});
		$( "#salvation_block" ).animate({top:"-=1200px" }, {duration:500});
		$( "#shit" ).animate({top:"-=1200px" }, {duration:500});
	});

	$("#right_holder").click(function(){
		$( "hgroup2 img:nth-of-type(1)" ).animate({right: "+=1920px" }, {duration:500});
		$( "#bg" ).animate({right: "+=1920px" }, {duration:500});
		$( "#image" ).animate({right: "+=1920px" }, {duration:500});
		$( "#imagetwo" ).animate({right: "+=1920px" }, {duration:500});
		$( "#video" ).animate({right: "+=1920px" }, {duration:500});
		$( "hgroup2 img:nth-of-type(3)" ).animate({right: "+=1920px" }, {duration:500});
		$( "#shit" ).animate({right: "+=1920px" }, {duration:500});
		$( "#meet" ).animate({right: "+=1920px" }, {duration:500});
		$( "#h" ).animate({right: "+=1920px" }, {duration:500});
		$( "#bg_debug" ).animate({right: "+=1920px" }, {duration:500});
		$( "#stopper_right" ).animate({right: "+=1920px" }, {duration:500});
		$( "#stopper_left" ).animate({right: "+=1920px" }, {duration:500});
	});
	$("#left_holder").click(function(){
		$( "hgroup2 img:nth-of-type(1)" ).animate({right: "-=1920px" }, {duration:500});
		$( "#bg" ).animate({right: "-=1920px" }, {duration:500});
		$( "#image" ).animate({right: "-=1920px" }, {duration:500});
		$( "#imagetwo" ).animate({right: "-=1920px" }, {duration:500});
		$( "#video" ).animate({right: "-=1920px" }, {duration:500});
		$( "hgroup2 img:nth-of-type(3)" ).animate({right: "-=1920px" }, {duration:500});
		$( "#shit" ).animate({right: "-=1920px" }, {duration:500});
		$( "#h" ).animate({right: "-=1920px" }, {duration:500});
		$( "#meet" ).animate({right: "-=1920px" }, {duration:500});
		$( "#bg_debug" ).animate({right: "-=1920px" }, {duration:500});
		$( "#stopper_right" ).animate({right: "-=1920px" }, {duration:500});
		$( "#stopper_left" ).animate({right: "-=1920px" }, {duration:500});
	});
	
});

