(function() {
    
    var html = $('html'),
        H = html.outerHeight(true),
        S = $(window).scrollTop(),
        P = S/H,
        toggle = $('input#toggle');
    
    $(window).scroll(function() {
        S = $(window).scrollTop();
        P = S/H;
    });
    
    $(window).resize(function() {
        if ( toggle.is(':checked') ) {
            H = html.outerHeight(true);
            $(window).scrollTop(P*H);
        }
    });
    
    toggle.change(function() {
        H = html.outerHeight(true);
        S = $(window).scrollTop();
        P = S/H;
    });
    
})();

