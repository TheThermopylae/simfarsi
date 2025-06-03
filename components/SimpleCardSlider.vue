<template>
  <div class="bg-[#EBEBEB] py-3 h-[180px] mb-32">
    <swiper
      :slidesPerView="2"
      :spaceBetween="14"
      :modules="modules"
      class="mySwiper !px-3"
    >
      <swiper-slide v-for="item in 10">
        <SimpleCard></SimpleCard>
      </swiper-slide>
    </swiper>
  </div>
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