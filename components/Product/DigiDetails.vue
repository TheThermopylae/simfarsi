<template>
  <main class="container">
    <ProductBackPage />
    <ProductImageDetails :data="props.data" />
    <ProductAddToBasket :data="props.data" />
  </main>
</template>

<script setup>
let props = defineProps(['data'])

console.log(props.data);

</script>
