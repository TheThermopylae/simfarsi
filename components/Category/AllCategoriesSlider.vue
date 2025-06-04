<template>
  <swiper
    :slidesPerView="2"
    :spaceBetween="8"
    :freeMode="true"
    :pagination="{
      clickable: true
    }"
    :modules="modules"
    class="mySwiper !pb-5"
  >
    <swiper-slide class="shadow-c-md px-3 pb-3 rounded-lg">
      <div class="grid grid-cols-2">
        <NuxtImg src="/category/farmon.svg" class="w-full"></NuxtImg>
        <NuxtImg src="/category/spiderman.svg" class="w-full"></NuxtImg>
        <NuxtImg src="/category/spiderman.svg" class="w-full"></NuxtImg>
        <NuxtImg src="/category/farmon.svg" class="w-full"></NuxtImg>
      </div>
      <div class="flex justify-between items-end text-2sm">
        اکسسوری
        <span class="primary rounded-md px-4 py-1 text-xs">530</span>
      </div>
    </swiper-slide>
    <swiper-slide class="shadow-c-md px-3 pb-3 rounded-lg">
      <div class="grid grid-cols-2">
        <NuxtImg src="/category/laptop.svg" class="w-full"></NuxtImg>
        <NuxtImg src="/category/laptopback.svg" class="w-full"></NuxtImg>
        <NuxtImg src="/category/laptopback.svg" class="w-full"></NuxtImg>
        <NuxtImg src="/category/laptop.svg" class="w-full"></NuxtImg>
      </div>
      <div class="flex justify-between items-end text-2sm">
        لپتاپ
        <span class="primary rounded-md px-4 py-1 text-xs">530</span>
      </div>
    </swiper-slide>
    <swiper-slide class="shadow-c-md px-3 pb-3 rounded-lg">
      <div class="grid grid-cols-2">
        <NuxtImg src="/category/bluecamera.svg" class="w-full"></NuxtImg>
        <NuxtImg src="/category/whitecamera.svg" class="w-full"></NuxtImg>
        <NuxtImg src="/category/whitecamera.svg" class="w-full"></NuxtImg>
        <NuxtImg src="/category/bluecamera.svg" class="w-full"></NuxtImg>
      </div>
      <div class="flex justify-between items-end text-2sm">
        دوربین
        <span class="primary rounded-md px-4 py-1 text-xs">530</span>
      </div>
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
