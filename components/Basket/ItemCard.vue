<template>
  <article class="flex gap-3 items-center text-2sm border-b border-gray-200 pb-3 mb-3">
    <div class="w-1/4">
      <img :src="props.item.img" :alt="'تصویر ' + props.item.title" />
      <div class="border rounded-md p-2 text-md flex justify-between mt-2">
        <span>+</span>
        <span>1</span>
        <span>-</span>
      </div>
    </div>
    <div class="w-3/4">
      <h4 class="font-peydaB text-xs">{{ props.item.title }}</h4>
      <div class="text-gray-500 mt-1 mb-2 leading-5">
        <p>دارای گارانتی</p>
        <p>فروشگاه امیر</p>
        <p>ارسال از 2 روز دیگر</p>
      </div>
      <span class="text-xs">{{ props.item.price.toLocaleString() }} تومان</span>
    </div>
  </article>
</template>

<script setup>
let props = defineProps(['item'])
</script>
