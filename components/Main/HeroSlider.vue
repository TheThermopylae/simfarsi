<template>
  <swiper
    :pagination="true"
    :space-between="10"
    :modules="modules"
    class="mySwiper h-[192px] !mb-5"
  >
    <swiper-slide class="rounded-2xl -mb-20"
      ><NuxtImg
        class="w-full h-full rounded-2xl -mb-20"
        src="/1748855494625-LEHS 1.svg"
      ></NuxtImg
    ></swiper-slide>
    <swiper-slide class="rounded-2xl -mb-20"
      ><NuxtImg
        class="w-full h-full rounded-2xl -mb-20"
        src="/1748855494625-LEHS 1.svg"
      ></NuxtImg
    ></swiper-slide>
    <swiper-slide class="rounded-2xl -mb-20"
      ><NuxtImg
        class="w-full h-full rounded-2xl -mb-20"
        src="/1748855494625-LEHS 1.svg"
      ></NuxtImg
    ></swiper-slide>
    <swiper-slide class="rounded-2xl -mb-20"
      ><NuxtImg
        class="w-full h-full rounded-2xl -mb-20"
        src="/1748855494625-LEHS 1.svg"
      ></NuxtImg
    ></swiper-slide>
    <swiper-slide class="rounded-2xl -mb-20"
      ><NuxtImg
        class="w-full h-full rounded-2xl -mb-20"
        src="/1748855494625-LEHS 1.svg"
      ></NuxtImg
    ></swiper-slide>
    <swiper-slide class="rounded-2xl -mb-20"
      ><NuxtImg
        class="w-full h-full rounded-2xl -mb-20"
        src="/1748855494625-LEHS 1.svg"
      ></NuxtImg
    ></swiper-slide>
    <swiper-slide class="rounded-2xl -mb-20"
      ><NuxtImg
        class="w-full h-full rounded-2xl -mb-20"
        src="/1748855494625-LEHS 1.svg"
      ></NuxtImg
    ></swiper-slide>
    <swiper-slide class="rounded-2xl -mb-20"
      ><NuxtImg
        class="w-full h-full rounded-2xl -mb-20"
        src="/1748855494625-LEHS 1.svg"
      ></NuxtImg
    ></swiper-slide>
    <swiper-slide class="rounded-2xl -mb-20"
      ><NuxtImg
        class="w-full h-full rounded-2xl -mb-20"
        src="/1748855494625-LEHS 1.svg"
      ></NuxtImg
    ></swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

import 'swiper/css/pagination'

// import required modules
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

<style>
.swiper-pagination {
  position: relative;
  top: -40px !important;
}
.swiper-pagination-bullet {
  border-radius: 9999px;
  background: white;
  opacity: 1;
  transition: all 0.3s;
  width: 5px;
  height: 5px;
}
.swiper-pagination-bullet-active {
  width: 20px;
  transition: all 0.3s;
}
</style>
