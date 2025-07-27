<template>
  <div class="bg-[#EBEBEB] py-3 h-[180px]">
    <swiper
      :slidesPerView="1"
      :spaceBetween="14"
      :modules="modules"
      class="mySwiper !px-3 !pb-5"
    >
      <swiper-slide v-for="item in sims">
        <CategorySimCardAd :sim="item" :key="item._id"></CategorySimCardAd>
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
    let sims = inject('amazingSimProducts')

    return {
      modules: [FreeMode],
      sims
    }
  }
}
</script>
