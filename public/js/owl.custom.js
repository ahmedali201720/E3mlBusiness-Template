$(document).ready(function () {

    $(".courses-carousel").owlCarousel({
        margin: 10,
        loop: true,
        mouseDrag: true,
        touchDrag: true,
        nav: true,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        autoplay: false,
        autoplayTimeout: 7000,
        rtl: getLang(),
        responsive: {
            0: {
                items: 1.1
            },

            370: {
                items: 1.1
            },

            400: {
                items: 1.3
            },

            500: {
                items: 1.6
            },

            600: {
                items: 1.7
            },

            768: {
                items: 2.2
            },
            992: {
                items: 3.1
            },
            1200: {
                items: 4.2
            },
            1300: {
                items: 4.3
            },
            1500: {
                items: 4.5
            }
        }
    });
    // Home Page 
    $("#en-homeSldr").owlCarousel({
        nav: true,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        items: 1,

    });

    $("#ar-homeSldr").owlCarousel({
        nav: true,
        rtl: true,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        items: 1,

    });

});
