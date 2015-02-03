$(window).on("scroll", function () {
    if ($(this).scrollTop() > 100) {
        $("#header").addClass("not-transparent");
    }
    else {
        $("#header").removeClass("not-transparent");
    }
});