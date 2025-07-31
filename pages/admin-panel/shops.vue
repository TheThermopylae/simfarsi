<template>
  <main>
    <h1 class="text-3xl">فروشگاه ها</h1>
    <div class="grid lg:grid-cols-2 mt-3 gap-5">
      <AdminDashboardShopCard
        @changeStatus="refresh"
        v-for="item in shops"
        :key="item._id"
        :data="item"
      />
    </div>
  </main>
</template>

<script setup>
useHead({
  title: 'فروشگاه ها'
})

let { data: shops, refresh } = await useFetch('/api/admin/shops/getShops', {
  credentials: 'include'
})

console.log(shops.value)
</script>
