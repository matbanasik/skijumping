$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 70) {
        $('.navbar').addClass('fixed');
    } else {
        $('.navbar').removeClass('fixed');
    }
});