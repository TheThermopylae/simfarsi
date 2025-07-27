<template>
  <ShopDetails :data="shop?.store"></ShopDetails>
  <AdSection :products="shop.products">
    <h2>محصولات فروشگاه {{ shop.store.name }}</h2>
  </AdSection>
</template>

<script setup>
let config = useRuntimeConfig()
let route = useRoute()

let { data: shop } = await useFetch(
  `${config.public.API_BASE_URL}/store/${route.params.id}`
)

console.log(shop.value)
</script>
