<template>
  <main class="container" v-if="data && data.division == 'digi'">
    <ProductBackPage />
    <ProductImageDetails :data="data" />
    <ProductAddToBasket :data="data" />
  </main>
  <div
    v-else
    class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
  >
    <h4 class="text-3xl font-peydaBlack">404</h4>
    <p class="text-gray-500">محصول مورد نظر پیدا نشد</p>
  </div>
</template>

<script setup>
let route = useRoute()
let { data } = await useFetch('/api/index/getProduct', {
  credentials: 'include',
  method: 'POST',
  body: { uid: route.query.uid, title: route.query.title }
})
</script>
