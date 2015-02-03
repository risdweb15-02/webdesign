$(document).ready(function() {
    
//    $("#dan, #james, #hiroshi").hover(function() {
//        var artist = $(this).attr("id");
//        $("body").css("background-image", "url(" + artist + ".jpg)");
//        });
    
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
   
    $("#background1, #background2, #background3").hide();
    
    $("#dan").hover(function() {
        $("#background1").fadeIn(1200);
        $("#background2, #background3").hide();
        });
    
    $("#james").hover(function() {
        $("#background2").fadeIn(1200);
        $("#background1, #background3").hide();
        });
    
    $("#hiroshi").hover(function() {
        $("#background3").fadeIn(1200);
        $("#background1, #background2").hide();
        });
});

