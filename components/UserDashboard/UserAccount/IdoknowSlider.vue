<template>
  <swiper
    :pagination="true"
    :space-between="10"
    :modules="modules"
    class="mySwiper h-[142px]"
  >
    <swiper-slide class="rounded-2xl !-mb2" v-for="item in 9" :key="item">
      <div class="w-full h-full rounded-[10px] bg-[#D9D9D9] !-mb2"></div>
    </swiper-slide>
  </swiper>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'

import 'swiper/css/pagination'

import { Pagination } from 'swiper/modules'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup () {
    return {
      modules: [Pagination]
    }
  }
}
</script>

<style scoped>
:deep(.swiper-pagination) {
  margin-top: 10px !important;
}
:deep(.swiper-pagination-bullet-active) {
  width: 25px;
  background: black !important;
  transition: all 0.3s;
}
</style>
