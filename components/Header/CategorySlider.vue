<template>
    <swiper
      :slidesPerView="'auto'"
      :spaceBetween="5"
      :freeMode="true"
      :pagination="{
        clickable: true
      }"
      :modules="modules"
      class="mySwiper mt-2"
    >
      <swiper-slide class="text-c-primary bg-sec rounded-md px-6 py-1.5 !w-fit text-2sm">همه</swiper-slide>
      <swiper-slide class="text-c-primary bg-sec rounded-md px-6 py-1.5 !w-fit text-2sm">سیم کارت کد 1</swiper-slide>
      <swiper-slide class="text-c-primary bg-sec rounded-md px-6 py-1.5 !w-fit text-2sm">آیفون</swiper-slide>
      <swiper-slide class="text-c-primary bg-sec rounded-md px-6 py-1.5 !w-fit text-2sm">پلی استیشن</swiper-slide>
      <swiper-slide class="text-c-primary bg-sec rounded-md px-6 py-1.5 !w-fit text-2sm">نمیدونم</swiper-slide>
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
