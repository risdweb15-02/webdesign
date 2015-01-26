$(document).ready(function() {
    //$("h1").css("background-color", "red"); 
    //$("h1").addClass("project1"); //
    $("button").click(function() { 
           var paraColor= $("body").css("color"); 
            console.log(paraColor); 
        if (paraColor ==="rgb"(255,0,0)") { 
            $("body").css("color", "rgb(0,0,255)"); 
    } else{ 
                      $("body").css("color","rgb(255,0,0)"); 
        
}); 
    

