<template>
  <main class="container">
    <BackButton />
    <section class="mt-3" v-if="data.data.length > 0">
      <OrdersOrderCard v-for="item in data.data" :data="item" :key="item._id" />
    </section>
    <p v-else class="text-xs text-center mt-3">سفارشی برای شما ثبت نشده است</p>
  </main>
</template>

<script setup>
useHead({
  title: '| سفارش های من'
})

let { data } = await useFetch('/api/getUserOrders', {
  credentials: 'include'
})
</script>
