<template>
  <section class="container">
    <AdMyAdCard v-for="item in data.products" :data="item" :key="item._id" />
  </section>
</template>

<script setup>
let { data } = await useFetch('/api/ad/getAds', {
  credentials: 'include'
})

console.log(data.value)
</script>
