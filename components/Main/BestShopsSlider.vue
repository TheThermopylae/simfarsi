<template>
  <swiper
    :slidesPerView="5.5"
    :spaceBetween="8"
    :freeMode="true"
    :pagination="{
      clickable: true
    }"
    :modules="modules"
    class="mySwiper !px-4"
  >
    <swiper-slide v-for="item in 10">
      <MainShopCard></MainShopCard>
    </swiper-slide>
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
/* ::v-deep(.swiper-slide-active) {
  background : black !important;
  color : white !important;
} */
</style>
