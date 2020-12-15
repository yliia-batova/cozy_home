$(function () {
  $(".slider__slick").slick({
    slidesToShow: 3,
    adaptiveHeight: true,
    arrows: true,
    dots: false,
    prevArrow: '<button class="slick-arrow slick-prew"><img src="images/prev-arrow.png"></button>',
    nextArrow: '<button class="slick-arrow slick-next"><img src="images/next-arrow.png"></button>',
  });
});