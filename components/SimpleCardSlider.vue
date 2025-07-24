<template>
  <div>
    <swiper
      :slidesPerView="2"
      :spaceBetween="14"
      :modules="modules"
      class="mySwiper !pb-3"
    >
      <swiper-slide
        v-for="item in amazingDigiProducts"
        v-if="amazingDigiProducts"
      >
        <SimpleCard :data="item"></SimpleCard>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

import { FreeMode } from 'swiper/modules'

let amazingDigiProducts = inject('amazingDigiProducts')
let modules = [FreeMode]
</script>
