var showbar=function(){
	$('.header p').mouseenter(function() {
		$(".header").css("background-color","rgba(255, 20, 20,1.0)");
      });

	$('.header p').mouseleave(function() {
		$(".header").css("background-color","rgba(255, 20, 20,0.6)");
      });

	$('.header p').click(function() {
		$(".sharedvoices").fadeIn();
      });

	$('.header p').click(function() {
		$("html, body").animate({ scrollTop: $(document).height() }, "slow");
  		return false;
  		});


	$(".footer p").click(function(){
		$(".sharedvoices").fadeOut();
	});
}



$(document).ready(showbar);