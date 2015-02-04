
$(document).ready(function(){
	$('#left_area').hover(function() {
		$('hgroup a:nth-of-type(1) img').addClass('transition');
	}, function() {
		$('hgroup a:nth-of-type(1) img').removeClass('transition');
	});
	$('#left_area').hover(function() {
		$('#moshe_p').addClass('test');
	}, function() {
		$('#moshe_p').removeClass('test');
	});


	$('#right_area').hover(function() {
		$('#xavier_p').addClass('test');
	}, function() {
		$('#xavier_p').removeClass('test');
	});
	$('#right_area').hover(function() {
		$('hgroup a:nth-of-type(2) img').addClass('transition');
	}, function() {
		$('hgroup a:nth-of-type(2) img').removeClass('transition');
	});


	$('#bottom_area').hover(function() {
		$('hgroup a:nth-of-type(3) img').addClass('transition');
	}, function() {
		$('hgroup a:nth-of-type(3) img').removeClass('transition');
	});
	$('#bottom_area').hover(function() {
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