var scrolltoTop=function(){

	$("a[href='#top']").click(function() {
  		$("html, body").animate({"scrollTop: 0", "slow"});
  		});

}


$(document).ready(scrolltoTop);