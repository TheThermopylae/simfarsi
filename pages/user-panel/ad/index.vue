<template>
  <div class="container text-xs font-peydaB">
    <h1>ثبت آگهی</h1>
    <section class="grid grid-cols-2 gap-1.5 my-4 px-3">
      <NuxtLink
        to="/user-panel/ad/commodity"
        class="h-[130px] border border-dashed rounded-2xl bg-[#F8F8F8] flex justify-center items-center"
        >آگهی کالا دیجیتال</NuxtLink
      >
      <NuxtLink
        to="/user-panel/ad/simcard"
        class="h-[130px] border border-dashed rounded-2xl bg-[#F8F8F8] flex justify-center items-center"
        >آگهی سیم کارت</NuxtLink
      >
    </section>
    <NuxtLink to="/" class="bg-[#F8F8F8] rounded-md p-3 block">
      کارشناسی سیم کارت
    </NuxtLink>
  </div>
</template>

<script setup>
useHead({
  title: '| ثبت آگهی'
})
</script>
