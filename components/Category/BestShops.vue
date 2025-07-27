<template>
  <section class="mt-5 container mb-5">
    <h2 class="mb-4 font-peydaB">بهترین فروشندگان</h2>
    <CategoryBestShopsSlider></CategoryBestShopsSlider>
  </section>
</template>

<script setup>
useHead({
  title: '| دسته بندی ها'
})

let config = useRuntimeConfig()
let { data: shops } = await useFetch(`${config.public.API_BASE_URL}/stores`)

provide('shops', shops)
</script>
