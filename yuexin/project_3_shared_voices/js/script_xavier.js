$(document).ready(function(){
	$("#left_holder").click(function(){
		$( "hgroup2 img:nth-of-type(1)" ).animate({left: "+=1920px" }, {duration:500});
		$( "#bg" ).animate({left: "+=2000px" }, {duration:500});
		$( "#image" ).animate({left: "+=1920px" }, {duration:500});
		$( "#imagetwo" ).animate({left: "+=1920px" }, {duration:500});
		$( "#video" ).animate({left: "+=1920px" }, {duration:500});
		$( "hgroup2 img:nth-of-type(3)" ).animate({left: "+=1920px" }, {duration:500});
		$( "#meet" ).animate({left: "+=1920px" }, {duration:500});
		$( "#h" ).animate({left: "+=1920px" }, {duration:500});
		$( "#stopper_right" ).animate({left: "+=1920px" }, {duration:500});
		$( "#stopper_left" ).animate({left: "+=1920px" }, {duration:500});
		$( "#shit" ).animate({left: "+=1920px" }, {duration:500});
	});
	$("#right_holder").click(function(){
		$( "hgroup2 img:nth-of-type(1)" ).animate({left: "-=1920px" }, {duration:500});
		$( "#bg" ).animate({left: "-=2000px" }, {duration:500});
		$( "#image" ).animate({left: "-=1920px" }, {duration:500});
		$( "#imagetwo" ).animate({left: "-=1920px" }, {duration:500});
		$( "#video" ).animate({left: "-=1920px" }, {duration:500});
		$( "hgroup2 img:nth-of-type(3)" ).animate({left: "-=1920px" }, {duration:500});
		$( "#h" ).animate({left: "-=1920px" }, {duration:500});
		$( "#meet" ).animate({left: "-=1920px" }, {duration:500});
		$( "#stopper_right" ).animate({left: "-=1920px" }, {duration:500});
		$( "#stopper_left" ).animate({left: "-=1920px" }, {duration:500});
		$( "#shit" ).animate({left: "-=1920px" }, {duration:500});
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

