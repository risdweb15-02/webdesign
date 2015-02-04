$(document).ready(function(){
	$("#salvation").click(function(){
		$( "#h" ).animate({top: "-=1920px"}, {duration:500});
		$( "#p" ).animate({opacity:"1" }, {duration:500});
		$( "#image" ).animate({top:"-=1545px" }, {duration:500});
		$( "#imagetwo" ).animate({top:"-=1545px" }, {duration:500});
		$( "#video" ).animate({top:"-=1200px" }, {duration:500});
		$( "#meet" ).animate({top:"-=1200px" }, {duration:500});
		$( "#salvation_block" ).animate({top:"-=1200px" }, {duration:500});
		$( "#shit" ).animate({top:"-=1200px" }, {duration:500});
	});

	$("#right_holder").click(function(){
		$( "hgroup2 img:nth-of-type(1)" ).animate({top: "-=300px" }, {duration:500});
		$( "#h" ).animate({top: "-=280px"}, {duration:500});
		$( "#p" ).animate({opacity:"1" }, {duration:500});
		$( "#rightright_holder" ).animate({left:"-=200px"}, {duration:500});
		$( "#leftleftleft_holder" ).animate({left:"-=400px"}, {duration:500});
	});
	$("#left_holder").click(function(){
		$( "hgroup2 img:nth-of-type(1)" ).animate({top: "+=300px" }, {duration:500});
		$( "#h" ).animate({top: "+=280px" }, {duration:500});
		$( "#p" ).animate({opacity:"0" }, {duration:500});
		$( "#rightright_holder" ).animate({left:"+=200px"}, {duration:500});
		$( "#leftleftleft_holder" ).animate({left:"+=400px"}, {duration:500});

	});

	$("#rightgreen_holder").click(function(){
		$( "hgroup2 img:nth-of-type(1)" ).animate({top: "+=300px" }, {duration:500});
		$( "#h" ).animate({top: "+=280px" }, {duration:500});
		$( "#p" ).animate({opacity:"0" }, {duration:500});
		$( "#rightright_holder" ).animate({left:"+=200px"}, {duration:500});
		$( "#leftleftleft_holder" ).animate({left:"+=400px"}, {duration:500});

	});
});

$(document).ready(function(){
	$("#rightright_holder").click(function(){
		$( "hgroup2 img:nth-of-type(1)" ).animate({top: "-=300px" }, {duration:500});
		$( "#h" ).animate({top: "-=1200px"}, {duration:500});
		$( "#p" ).animate({opacity:"1" }, {duration:500});
		$( "#image" ).animate({top:"-=1920px" }, {duration:500});
		$( "#imagetwo" ).animate({top:"-=1920px" }, {duration:500});
		$( "#video" ).animate({top:"-=1920px" }, {duration:500});
		$( "#secondhead" ).animate({top:"-=1920px" }, {duration:500});
		$( "#meet" ).animate({top:"-=1920px" }, {duration:500});
		$( "#shit" ).animate({top:"-=1920px" }, {duration:500});
		$( "#rightrightright_holder" ).animate({left:"-=400px"}, {duration:500});
		$( "#leftleftleft_holder" ).animate({left:"-=400px"}, {duration:500});
		$( "#rightgreen_holder" ).animate({left:"-=400px" }, {duration:500});
	});
	$("#leftleft_holder").click(function(){
		$( "hgroup2 img:nth-of-type(1)" ).animate({top: "+=300px" }, {duration:500});
		$( "#h" ).animate({top: "+=1200px"}, {duration:500});
		$( "#p" ).animate({opacity:"1" }, {duration:500});
		$( "#image" ).animate({top:"+=1920px" }, {duration:500});
		$( "#imagetwo" ).animate({top:"+=1920px" }, {duration:500});
		$( "#video" ).animate({top:"+=1920px" }, {duration:500});
		$( "#secondhead" ).animate({top:"+=1920px" }, {duration:500});
		$( "#meet" ).animate({top:"+=1920px" }, {duration:500});
		$( "#shit" ).animate({top:"+=1920px" }, {duration:500});
		$( "#rightrightright_holder" ).animate({left:"+=400px"}, {duration:500});
		$( "#leftleftleft_holder" ).animate({left:"+=400px"}, {duration:500});
		$( "#rightgreen_holder" ).animate({left:"+=400px" }, {duration:500});
	});

	$(window).resize(function(){
		if ($(window).width() <= 568){	
		html.css('overflow', 'asdf');


		}	
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
