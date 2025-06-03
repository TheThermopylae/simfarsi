<template>
  <div
    class="flex justify-between items-ceter border-b border-gray-300 mb-4 pb-4 px-4"
  >
    <h2 class="text-xs font-peydaB">جدیدترین آگهی ها</h2>
  </div>
  <section class="mb-20">
    <MainAdCard v-for="item in data.products" :key="item._id" :data="item"></MainAdCard>
  </section>
</template>

<script setup>
let config = useRuntimeConfig()

let { data } = await useFetch('/api/admin/products/getProducts', {
  credentials: 'include'
})

// console.log(data.value)
</script>
