<template>
  <div class="pb-3 mb-3 container border-b border-gray-300">
    <swiper
      :slidesPerView="5"
      :spaceBetween="15"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide class="text-2sm">
        <div class="text-cente">
          <div class="flex-center w-[52px] h-[52px] rounded-full bg-black mb-2">
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.08452 15.1875V0.357954H7.9027V15.1875H7.08452ZM0.0788354 8.18182V7.36364H14.9084V8.18182H0.0788354Z"
                fill="white"
              />
            </svg>
          </div>
          افزودن استوری
        </div>
      </swiper-slide>
      <swiper-slide v-for="item in 10">
        <div class="w-[55px] h-[55px] border rounded-full flex-center">
          <svg
            width="45"
            height="45"
            viewBox="0 0 45 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <rect
              width="45"
              height="45"
              rx="22.5"
              fill="url(#pattern0_550_2936)"
            />
            <defs>
              <pattern
                id="pattern0_550_2936"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlink:href="#image0_550_2936"
                  transform="translate(0 -0.0393519) scale(0.00462963)"
                />
              </pattern>
              <image
                id="image0_550_2936"
                width="216"
                height="233"
                preserveAspectRatio="none"
                xlink:href="data:image/jpeg;base64,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"
              />
            </defs>
          </svg>
        </div>
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
