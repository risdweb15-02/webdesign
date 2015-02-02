$(document).ready(function() {
   //$("#first").css("background-color", "red");
   $("p").addClass("blue");
   $("p").attr("id", "body");

   $("button").click(function() {

      $("p").toggleClass("red");
      //find my paragraphs color
      /*var paraColor = $("p").css("color");
      //if my paragraph color is red, then change it to blue
      if (paraColor === "rgb(255,0,0)") {
         $("p").css("color", "rgb(0,0,255)");
      } else if (paraColor === "rgb(0,0,255)") {
         $("p").css("color","rgb(255,0,0)");
      }*/
      //else change it to red


      //$("p").css("color","red");
   });

});
