//wait for everything to load before running scripts
$(document).ready(function() {
	//$("li:nth-child(1)").css("background-color", "lightblue")
	$("p").addClass("blue");

	$("button").click(function() {
				$("p").toggleClass("red");

		/*
		//find my paragraph color
		var paraColor = $("p").css("color")
		//if my paragraph color is red, then change it to blue
		if(paraColor === "rgb(0,0,255)") {
			$("p").css("color", "rgb(255,0,0)")
		} else {
			$("p").css("color", "rgb(0,255,0)")
		}
		//else change it to red
		//$("p").css("color", "red");
		*/
	})

});