<template>
  <div class="container">
    <NuxtLink to="/basket" class="font-peydaB mb-3 block">بازگشت</NuxtLink>
    <h1 class="text-xs mb-3">انتخاب آدرس و روش پرداخت</h1>
    <BasketAddressSelected />
    <BasketSelectPayWay />
  </div>
</template>

<script setup>
definePageMeta({
  middleware : 'basket'
})

useHead({
  title: '| انتخاب آدرس و پرداخت'
})
</script>
