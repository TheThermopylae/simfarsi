<template>
  <div class="container">
    <BackPage />
    <ProductPosterSection :data="data" />
    <ProductCommunicationSection />
    <ProductSellDetails :data="data" />
    <ProductDetails :data="data" />
    <!-- <div class="my-3 flex gap-3">
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
    </div> -->
    <Button
      :loading="loading"
      label="پرداخت امن"
      pt:root="!primary !block !my-3 !rounded !text-center !p-3 !font-peydaB !w-full"
      to="/"
      @click="purchaseSimFunc"
    />

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

let route = useRoute()
let { data } = await useFetch('/api/index/getProduct', {
  credentials: 'include',
  method: 'POST',
  body: { uid: route.query.uid, title: route.query.title }
})

console.log(data.value)

let loading = ref(false)

async function purchaseSimFunc () {
  loading.value = true

  try {
    let request = await $fetch('/api/payment/ordersim', {
      credentials: 'include',
      method: 'POST',
      body: { id: data.value._id }
    })

    
  } catch (error) {
    console.log(error)
  } finally {
    loading.value = false
  }
}
</script>
