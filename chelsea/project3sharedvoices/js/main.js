$(document).ready(function() {
    
    $("#dan, #james, #hiroshi").hover(function() {
        var artist = $(this).attr("id");
        $("body").css("background-image", "url(" + artist + ".jpg)");
        });
    
    $("#dan").hover(function() {
          $("#dan, #james, #hiroshi").css("color", "white");
          $("#header_left, #header, #about").css("color", "white");
          $("#splash").css("color", "white");
        });
    
    $("#james").hover(function() {
          $("#dan, #james, #hiroshi").css("color", "white");
          $("#header_left, #header, #about").css("color", "white");
          $("#splash").css("color", "white");
        });
    
    $("#hiroshi").hover(function() {
          $("#dan, #james, #hiroshi").css("color", "white");
          $("#header_left, #header, #about").css("color", "white");
          $("#splash").css("color", "white");
        });
        
    $("#header_left").hover(function() {
          $("body").css("background-image", "none");
          $("#header_left, #splash, #about").css("color", "black");
          $("#dan, #james, #hiroshi").css("color", "#B8B8B8");
        });
    
    $("#intro").click(function() {
          $(this).toggleClass("blue");
        });
});

