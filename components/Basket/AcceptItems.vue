<template>
  <section class="mt-3">
    <div class="flex justify-between items-center mb-2">
      <h2 class="text-xs">جمع سبد خرید :</h2>
      <span class="text-2sm">{{ calcPrice.toLocaleString() }} تومان</span>
    </div>
    <NuxtLink to="/basket/checkout" class="primary w-full block text-xs rounded p-3 text-center">تایید و ادامه</NuxtLink>
  </section>
</template>

<script setup>
let props = defineProps(['data'])

let calcPrice = computed(() => {
  let sum = 0
  props.data.forEach(product => {
    sum += product.price
  })
  return sum
})
</script>
