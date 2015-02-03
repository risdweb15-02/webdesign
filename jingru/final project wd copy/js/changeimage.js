
/* Kusama */
var changeimage=function(){
	$('.artist').mouseenter(function() {
		/*change txt color*/
       $(".artist li").css({
           color:"white"
       });
       /*show image*/
       $("#kusama").fadeIn("slow");
       /*hide other txt while showing the image*/

       $(".artist2").hide();
       $(".artist3").hide();
       $("h2").css({color:"white"});
       

   });


   $('.artist').mouseleave(function() {
       $(".artist li").css({
           color:"rgba(0,0,0,1.0)"}); 
       $(".info").css({
           color:"rgba(0,0,0,0.2)"}); 
       $("#kusama").fadeOut("slow");
       $(".artist2").show();
       $(".artist3").show();
       $("h2").css({color:"black"});


   });
}


$(document).ready(changeimage);



/* Kraftwerk */
var changeimage2=function(){
	$('.artist2').mouseenter(function() {
		/*change txt color*/
       $(".artist2 li").css({
           color:"white"
       });
       $("h2").css({
       		color:"white"
       });
       /*show image*/
       $("#kraftwerk").fadeIn("slow");
       /*hide other txt while showing the image*/
       $(".artist").css({opacity:"0.0"});
       $(".artist3").css({opacity:"0.0"});

   });


   $('.artist2').mouseleave(function() {
       $(".artist2 li").css({
           color:"rgba(0,0,0,1.0)"}); 
        $("h2").css({
       		color:"black"
       });
       $(".info2").css({
           color:"rgba(0,0,0,0.2)"}); 
       $("#kraftwerk").fadeOut("slow");
       $(".artist").css({opacity:"1.0"});
       $(".artist3").css({opacity:"1.0"});


   });
}


$(document).ready(changeimage2);


/* Wolfgang Laib */
var changeimage3=function(){
	$('.artist3').mouseenter(function() {
		/*change txt color*/
       $(".artist3 li").css({
           color:"white"
       });
       $("h2").css({
       		color:"white"
       });
       /*show image*/
       $("#wolfgang").fadeIn("slow");
       /*hide other txt while showing the image*/
       $(".artist").css({opacity:"0.0"});
       $(".artist2").css({opacity:"0.0"});

   });


   $('.artist3').mouseleave(function() {
       $(".artist3 li").css({
           color:"rgba(0,0,0,1.0)"}); 
        $("h2").css({
       		color:"black"
       });
       $(".info3").css({
           color:"rgba(0,0,0,0.2)"}); 
       $("#wolfgang").fadeOut("slow");
       $(".artist").css({opacity:"1.0"});
       $(".artist2").css({opacity:"1.0"});


   });
}


$(document).ready(changeimage3);