<template>
  <div class="container" v-if="data && data?.division == 'sim'">
    <BackPage />
    <ProductPosterSection :data="data" />
    <!-- <ProductCommunicationSection /> -->
    <ProductSellDetails :data="data" />
    <ProductDetails :data="data" />
    <Button
      :loading="loading"
      label="پرداخت امن"
      pt:root="!primary !block !my-3 !rounded !text-center !p-3 !font-peydaB !w-full"
      to="/"
      @click="purchaseSimFunc"
    />
    <!-- <div class="flex justify-between items-center">
      <h2 class="text-sm">پیشنهاد لحظه ای برای شما</h2>
      <NuxtLink to="/" class="text-2sm text-c-primary">مشاهده همه</NuxtLink>
    </div>
    <SearchSpecialCard /> -->
    <!-- <div class="flex justify-between items-center">
      <h2 class="text-sm">محصولات پر طرفدار</h2>
      <NuxtLink to="/" class="text-2sm text-c-primary">مشاهده همه</NuxtLink>
    </div> -->
    <!-- <SimpleCardSlider></SimpleCardSlider> -->
    <!-- <ProductNoteSection /> -->
  </div>
  <div
    v-else
    class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
  >
    <h4 class="text-3xl font-peydaBlack">404</h4>
    <p class="text-gray-500">محصول مورد نظر پیدا نشد</p>
  </div>
</template>

<script setup>
useHead({
  title: '| صفحه ی محصول'
})

const route = useRoute()

let { data } = await useFetch('/api/index/getProduct', {
  credentials: 'include',
  method: 'POST',
  body: {
    uid: route.query.uid,
    title: route.query.title
  }
})

console.log(data.value)

const loading = ref(false)

async function purchaseSimFunc () {
  loading.value = true

  try {
    const request = await $fetch('/api/payment/ordersim', {
      credentials: 'include',
      method: 'POST',
      body: { id: data.value._id }
    })

    console.log(request)
  } catch (error) {
    console.log(error)
  } finally {
    loading.value = false
  }
}
</script>
