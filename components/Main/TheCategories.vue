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
    <swiper-slide
      class="!w-fit text-xs text-center"
      v-for="item in data.categorys"
    >
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

let { data } = await useFetch('/api/admin/categories/getCategory', {
  credentials: 'include'
})

let modules = [FreeMode]
</script>
