<template>
  <div class="container">
    <BackPage />
    <ProductPosterSection :data="props.data" />
    <ProductCommunicationSection />
    <ProductSellDetails :data="props.data" />
    <ProductDetails :data="props.data" />
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
    <AdSection />
  </div>
</template>

<script setup>
let props = defineProps(['data'])

let loading = ref(false)

async function purchaseSimFunc () {
  loading.value = true

  try {
    let request = await $fetch('/api/payment/ordersim', {
      credentials: 'include',
      method: 'POST',
      body: { id: props.data._id }
    })

    console.log(request)
  } catch (error) {
    console.log(error)
  } finally {
    loading.value = false
  }
}
</script>
