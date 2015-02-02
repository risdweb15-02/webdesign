
$(document).ready(function(){
	$('hgroup a:nth-of-type(1) img').hover(function() {
		$(this).addClass('transition');
	}, function() {
		$(this).removeClass('transition');
	});
	$('hgroup a:nth-of-type(1) img').hover(function() {
		$('#moshe_p').addClass('test');
	}, function() {
		$('#moshe_p').removeClass('test');
	});


	$('hgroup a:nth-of-type(2) img').hover(function() {
		$('#xavier_p').addClass('test');
	}, function() {
		$('#xavier_p').removeClass('test');
	});
	$('hgroup a:nth-of-type(2) img').hover(function() {
		$(this).addClass('transition');
	}, function() {
		$(this).removeClass('transition');
	});


	$('hgroup a:nth-of-type(3) img').hover(function() {
		$(this).addClass('transition');
	}, function() {
		$(this).removeClass('transition');
	});
	$('hgroup a:nth-of-type(3) img').hover(function() {
		$('#third_p').addClass('test');
	}, function() {
		$('#third_p').removeClass('test');
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