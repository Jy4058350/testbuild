import Swiper, { Navigation, Pagination } from "swiper";
// Swiper.use([Navigation, Pagination]);
/*
  Swiper.use([Navigation, Pagination, Autoplay]);
*/

const swiper = new Swiper(".swiper", {
  // Optional parameters
  modules: [ Navigation, Pagination ],
  loop: true,
  speed: 1000,
  spaceBetween: 100,
  allowSlideNext: true,
  allowSlidePrev: true,
  allowTouchMove: true,
  autoHeight: true,
  centerInsufficientSlides: true,
  centeredSlides: false,
  centeredSlidesBounds: false,
  // containerModifierClass: "swiper-container-",
  // effect: "flip",
  cssMode: false,

  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
