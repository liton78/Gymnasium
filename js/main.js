$(document).ready(function(){
    'use strict'
    // color switcher
    $('.color-picker .color-btn').on('click',function(){
        $('.color-picker').toggleClass('color-pos');
    });

    $('.color-picker ul .orange').on('click',function(){
        $('body').addClass('orange').removeClass('green').removeClass('blue');
    });

    $('.color-picker ul .green').on('click',function(){
        $('body').addClass('green').removeClass('orange').removeClass('blue');
    });

    $('.color-picker ul .blue').on('click',function(){
        $('body').addClass('blue').removeClass('green').removeClass('orange');
    });

    $('.color-picker ul .difauld').on('click',function(){
        $('body').addClass('difauld').removeClass('orange').removeClass('green').removeClass('blue');
    });

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
        slidesToScroll: 1,
    }
    },
    {
    breakpoint: 480,
    settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
    }
    }
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
                    slidesToShow: 3,
                    infinite: true,
                }
            },

            {
                breakpoint: 767,
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


});