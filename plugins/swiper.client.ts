import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("Swiper", Swiper);
  nuxtApp.vueApp.component("SwiperSlide", SwiperSlide);
  return {
    provide: {
      swiper: {
        Pagination: Pagination,
        Navigation: Navigation,
        Autoplay: Autoplay,
      },
    },
  };
});
