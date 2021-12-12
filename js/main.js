$(document).ready(function(){
    'use strict'
    // for banner
    $('.banner-slider').slick({
        dots: true,
        arrows: false,
        autoplay: true,
    });

    // venubox about
    $('.venobox').venobox();

//     new Venobox({
//     selector: '.venobox'
// });


    // testimonial slider slick

    $('.testimonial-slider').slick({
        dots: true,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
    {
    breakpoint: 992,
    settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
    }
    },
    {
    breakpoint: 576,
    settings: {
        slidesToShow: 1,
        slidesToScroll: 1
    }
    },
    {
    breakpoint: 480,
    settings: {
        slidesToShow: 1,
        slidesToScroll: 1
    }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
]
    });

    // funfact counter
    $('.counter').counterUp();

     // branded slider slick

    $('.brand-slider').slick({
        arrows: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
        prevArrow: '<i class="fas fa-chevron-left left-arrow"></i>',
        nextArrow: '<i class="fas fa-chevron-right right-arrow"></i>',

        responsive:[
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 5,
                    infinite: true,
                }
            },
        
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    autoplay:true
                }
            },
            
            {
                breakpoint: 482,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    centerMode: false,
                    autoplay:true,
                    arrows: false,
                }
            }
        ],

    });


    $('.testimonial-2-slider').slick({
        slidesToShow: 2,
    });

});