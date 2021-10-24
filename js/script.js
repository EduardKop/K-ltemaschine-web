$(document).ready(function(){
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true,
        dots:true,
        appendArrows:$('.slider__btns'),
        appendDots:$('.slider__dots'),

    });
});