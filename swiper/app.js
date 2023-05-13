import Swiper, { Navigation, Pagination } from "swiper";
Swiper.use([Navigation, Pagination]);

var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
});
