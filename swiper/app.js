import Swiper, { Navigation, Pagination } from "swiper";
Swiper.use([Navigation, Pagination]);
/*
  Swiper.use([Navigation, Pagination, Autoplay]);
*/

const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  speed: 1000,
  spaceBetween: 100,
  allowSlideNext: true,
  allowSlidePrev: true,
  allowTouchMove: true,
  autoHeight: false,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});
