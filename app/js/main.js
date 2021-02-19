$(function () {
  $(".slider__slick").slick({
    slidesToShow: 3,
    adaptiveHeight: true,
    arrows: true,
    dots: false,
    prevArrow: '<button class="slick-arrow slick-prew"><img src="images/prev-arrow.png"></button>',
    nextArrow: '<button class="slick-arrow slick-next"><img src="images/next-arrow.png"></button>',
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  $('.header__menu-btn').on('click', function () {
    $('.header__menu .menu').slideToggle();
  });
});

const offset = 100;
const scrollUp = document.querySelector(".scrollup");
const getTop = () => window.pageXOffset || document.documentElement.scrollTop;

window.addEventListener('scroll', () => {
  if ( getTop() > offset) {
    scrollUp.classList.add('scrollup__active')
  } else {
    scrollUp.classList.remove('scrollup__active')
  }
});

scrollUp.addEventListener('click', () => {
  window.scrollTo({
    top:0,
    behavior: 'smooth'
  });
});
