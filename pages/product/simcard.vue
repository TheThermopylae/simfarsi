<template>
  <div class="container">
    <BackPage />
    <ProductPosterSection />
    <ProductCommunicationSection />
    <ProductSellDetails />
    <ProductDetails />
    <div class="my-3 flex gap-3">
      <nuxtLink
        to="/"
        class="border rounded border-[#707070] text-[#898990] text-2sm px-2 py-1"
        >سیم کارت</nuxtLink
      >
      <nuxtLink
        to="/"
        class="border rounded border-[#707070] text-[#898990] text-2sm px-2 py-1"
        >سیم کارت در تهران سر</nuxtLink
      >
    </div>
    <nuxtLink class="primary block my-3 rounded text-center p-3 font-peydaB" to="/">
      پرداخت امن
    </nuxtLink>
    <div class="flex justify-between items-center">
      <h2 class="text-sm">پیشنهاد لحظه ای برای شما</h2>
      <NuxtLink to="/" class="text-2sm text-c-primary">مشاهده همه</NuxtLink>
    </div>
    <SearchSpecialCard />
    <div class="flex justify-between items-center">
      <h2 class="text-sm">محصولات پر طرفدار</h2>
      <NuxtLink to="/" class="text-2sm text-c-primary">مشاهده همه</NuxtLink>
    </div>
    <SimpleCardSlider></SimpleCardSlider>
    <ProductNoteSection />
  </div>
</template>

<script setup>
useHead({
  title: '| صفحه ی محصول'
})
</script>
