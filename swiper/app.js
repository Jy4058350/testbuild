import Swiper, { Navigation, Pagination } from "swiper";
Swiper.use([Navigation, Pagination]);
/*
  Swiper.use([Navigation, Pagination, Autoplay]);
*/

var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
});
