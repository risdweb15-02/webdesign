$(document).ready(function() {
    $("li").css("background-color", "red");
    
    $("li").click(function() {
    
    $("button").click(function() {
        //find my paragraph color
        var paraColor = $("p").css("color");
        //if my paragraph color is red, then change it to blue
        if (paraColor === "rgb(255,0,0)") {
            $("p").css("color", "rgb(0,0,255)");
        } else {
            $("p").css("color", "rgb(255,0,0)");
        }
    });
});