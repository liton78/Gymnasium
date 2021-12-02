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

    // testimonial slider slick

    $('.testimonial-slider').slick({
        dots: true,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
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
        nextArrow: '<i class="fas fa-chevron-right right-arrow"></i>'
    });

});