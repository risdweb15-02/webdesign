$(document).ready(function() {
    
    $("#pic1").click(function() {
        $("#nicoleQuote").fadeTo('slow',1);
    });





    $("#pic2").mouseenter(function() {
        $(this).fadeTo('slow',1);
    });

    $("#pic2").mouseleave(function() {
        $(this).fadeTo('slow',0.5);
    });


   


});