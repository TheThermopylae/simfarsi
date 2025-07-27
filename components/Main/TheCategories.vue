<template>
  <swiper
    :slidesPerView="'auto'"
    :spaceBetween="10"
    :freeMode="true"
    :pagination="{
      clickable: true
    }"
    :modules="modules"
    class="mySwiper !px-4"
  >
    <swiper-slide class="!w-fit text-xs text-center" v-for="item in data.all">
      <img
        :src="`${$config.public.API_BASE_URL}${item.img}`"
        :alt="`عکس ${item.title}`"
        class="size-20 rounded-full mb-2"
      />
      {{ item.title }}
    </swiper-slide>
  </swiper>
</template>
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'

import 'swiper/css/free-mode'
import 'swiper/css/pagination'

import { FreeMode } from 'swiper/modules'

let config = useRuntimeConfig()

let { data } = await useFetch(`${config.public.API_BASE_URL}/categorys`, {
  credentials: 'include'
})

let modules = [FreeMode]
</script>
