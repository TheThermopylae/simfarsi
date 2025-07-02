<template>
  <main class="container">
    <ProductBackPage />
    <ProductImageDetails :data="data" />
    <ProductAddToBasket :data="data" />
  </main>
</template>

<script setup>
let route = useRoute()
let { data } = await useFetch('/api/index/getProduct', {
  credentials: 'include',
  method: 'POST',
  body: { uid: route.query.uid, title: route.query.title }
})

console.log(data.value);

</script>
