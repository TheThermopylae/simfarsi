<template>
  <swiper
    :slidesPerView="'auto'"
    :spaceBetween="5"
    :freeMode="true"
    :pagination="{
      clickable: true
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide class="bg-sec !w-fit rounded-full text-center py-2 px-6"
      >همه</swiper-slide
    >
    <swiper-slide class="bg-sec !w-fit rounded-full text-center py-2 px-6"
      >سیمکارت کد 1</swiper-slide
    >
    <swiper-slide class="bg-sec !w-fit rounded-full text-center py-2 px-6"
      >آیفون</swiper-slide
    >
    <swiper-slide class="bg-sec !w-fit rounded-full text-center py-2 px-6"
      >PS5</swiper-slide
    >
    <swiper-slide class="bg-sec !w-fit rounded-full text-center py-2 px-6"
      >نمیدونم</swiper-slide
    >
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'

import 'swiper/css/free-mode'
import 'swiper/css/pagination'

import { FreeMode } from 'swiper/modules'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup () {
    return {
      modules: [FreeMode]
    }
  }
}
</script>

<style scoped>
::v-deep(.swiper-slide-active) {
  background-color: black;
  color: white;
}
</style>
