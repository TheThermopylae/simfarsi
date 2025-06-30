<template>
  <div class="mb-32">
    <button
      class="flex items-center gap-2 text-sm font-peydaBlack"
      @click="$emit('prevStep')"
    >
      <div
        class="w-5 h-5 bg-black rounded-full flex justify-center items-center"
      >
        <svg
          width="6"
          height="11"
          viewBox="0 0 6 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.904459 11L6 5.5L0.904459 0L0 0.97625L4.19108 5.5L0 10.0238L0.904459 11Z"
            fill="white"
          />
        </svg>
      </div>
      بازگشت
    </button>
    <div class="bg-[#F6F6F6] rounded-[10px] mt-5 p-4">
      <div class="flex items-center gap-3 text-2sm font-peydaBlack">
        <input type="radio" name="radio-1" class="radio" checked />
        <h3>ارسال آگهی در دسته بندی گوشی موبایل /iphon</h3>
      </div>
      <div class="flex justify-between text-2sm mt-5">
        <p class="text-[#848484]">هزینه ثبت آگهی</p>
        <p class="font-peydaB">150,000 تومان</p>
      </div>
    </div>
    <section class="text-2sm mt-5">
      <div
        v-for="item in data.price"
        :key="item._id"
        class="flex justify-between items-center gap-2 p-3 rounded-[18px] border border-white transition-all"
        :class="{ '!border-[#C2C2C2]': props.data.ad_type == item.value }"
      >
        <div class="flex items-center gap-2">
          <div
            class="w-[54px] h-[54px] rounded bg-[#D9D9D9] flex-shrink-0"
          ></div>
          <div>
            <div class="flex justify-between flex-grow-1 w-full">
              <h4 class="font-peydaB">{{ item.title }}</h4>
            </div>
            <!-- <p class="text-[#8C8E91]">
              تاریخ انقضاء آگهی شما 30 روز عقب می افد و همزمان نردبان نیز اعمال
              میشود
            </p> -->
          </div>
        </div>
        <div class="flex gap-2 items-center">
          <p
            class="font-peydaB"
            v-text="item.price ? item.price + ' تومان' : 'رایگان'"
          ></p>
          <input
            type="radio"
            v-model="props.data.ad_type"
            :value="item.value"
            name="radio-2"
            class="radio"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
let props = defineProps(['data'])

let { data } = await useFetch(`/api/ad/getPrices`, {
  credentials: 'include'
})
</script>
