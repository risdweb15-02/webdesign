$(document).ready(function(){
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

