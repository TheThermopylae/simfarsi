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
    <section class="bg-[#F6F6F6] rounded-[34px] p-6 pb-2 mt-5 text-xs">
      <h1 class="text-sm">جزئیات پرداخت</h1>
      <div class="flex justify-between mt-5 mb-10">
        <h3>هزینه ثبت آگهی</h3>
        <p class="font-peydaB">150,000 تومان</p>
      </div>
      <h3 class="text-xs font-peydaB">مبلغ کل</h3>
    </section>
    <section>
      <h2 class="text-2sm mt-5">انتخاب روش پرداخت</h2>
      <div class="text-2sm mt-5">
        <div
          class="flex justify-between items-center gap-2 p-6 rounded-[18px] border border-white transition-all"
          :class="{ '!border-[#C2C2C2]': props.payType == 0 }"
        >
          <div>
            <h3 class="font-peydaB mb-2">پرداخت آنلاین</h3>
            <p>درگاه سامان</p>
          </div>
          <input
            type="radio"
            name="radio-2"
            class="radio"
            checked
            @change="$emit('changePayType', 0)"
          />
        </div>
        <div
          class="flex justify-between items-center gap-2 p-6 rounded-[18px] border border-white transition-all"
          :class="{ '!border-[#C2C2C2]': props.payType == 1 }"
        >
          <div>
            <h3 class="font-peydaB mb-2">پرداخت اعتباری</h3>
            <p>موجودی :19,000 تومان</p>
          </div>
          <input
            type="radio"
            name="radio-2"
            class="radio"
            @change="$emit('changePayType', 1)"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
let props = defineProps(['payType'])
</script>
