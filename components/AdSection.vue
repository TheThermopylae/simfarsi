<template>
  <div
    class="flex justify-between items-ceter border-b border-gray-300 mb-4 pb-4 px-4"
  >
    <h2 class="text-xs font-peydaB"><slot></slot></h2>
  </div>
  <section class="mb-20">
    <AdCard
      v-for="item in data.products"
      :key="item._id"
      :data="item"
      v-if="data"
    ></AdCard>
    <p v-else class="text-center text-xs">محصولی وجود ندارد</p>
  </section>
</template>

<script setup>
let { data } = await useFetch('/api/admin/products/getProducts', {
  credentials: 'include'
})
</script>
