$(document).ready(function() {

	$('#shane').hover(function() {
    	$(this).find("img:last").fadeToggle('slow');
	});

	$('#mac').hover(function() {
    	$(this).find("img:last").fadeToggle('slow');
	});

	$('#mitch').hover(function() {
    	$(this).find("img:last").fadeToggle('slow');
	});


	$("#box-up").click(function(){
        $("#box-down").slideToggle("slow");
    });


	$("h3").addClass("event");


});

