<template>
    <swiper
      :slidesPerView="'auto'"
      :spaceBetween="5"
      :freeMode="true"
      :pagination="{
        clickable: true
      }"
      :modules="modules"
      class="mySwiper !px-4"
    >
      <swiper-slide class="bg-sec rounded-full px-6 py-1.5 !w-fit">همه</swiper-slide>
      <swiper-slide class="bg-sec rounded-full px-6 py-1.5 !w-fit">سیم کارت کد 1</swiper-slide>
      <swiper-slide class="bg-sec rounded-full px-6 py-1.5 !w-fit">آیفون</swiper-slide>
      <swiper-slide class="bg-sec rounded-full px-6 py-1.5 !w-fit">پلی استیشن</swiper-slide>
      <swiper-slide class="bg-sec rounded-full px-6 py-1.5 !w-fit">نمیدونم</swiper-slide>
    </swiper>
</template>
<script>
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
  background : black !important;
  color : white !important;
}
</style>
