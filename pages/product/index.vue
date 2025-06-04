<template>
  <div class="container">
    <BackPage />
    <ProductPosterSection />
    <ProductCommunicationSection />
    <ProductSellDetails />
    <ProductDetails />
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
