$(document).ready(function () {

    $(".section-carousel").owlCarousel({
        margin: 10,
        loop: true,
        mouseDrag: true,
        touchDrag: true,
        nav: true,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        autoplay: false,
        autoplayTimeout: 7000,
        rtl: true,
        responsive: {
            0: {
                items: 1.5
            },

            370: {
                items: 2
            },

            400: {
                items: 2.2
            },

            500: {
                items: 2.6
            },

            600: {
                items: 3.2
            },

            768: {
                items: 4.2
            },
            992: {
                items: 5
            },
            1200: {
                items: 6.2
            },
            1300: {
                items: 6.75
            },
            1500: {
                items: 7.75
            }
        }
    });

});
