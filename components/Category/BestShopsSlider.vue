<template>
  <swiper
    :slidesPerView="5"
    :spaceBetween="8"
    :freeMode="true"
    :pagination="{
      clickable: true
    }"
    :modules="modules"
    class="mySwiper !pb-5"
  >
    <swiper-slide :key="item._id" v-for="item in shops.stores">
      <CategoryShopCard :data="item"></CategoryShopCard>
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
    let shops = inject('shops')

    return {
      modules: [FreeMode],
      shops
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
