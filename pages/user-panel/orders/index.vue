<template>
  <main class="container">
    <BackButton />
    <section class="mt-3">
      <OrdersOrderCard v-for="item in data.data" :data="item" :key="item._id" />
    </section>
  </main>
</template>

<script setup>
useHead({
  title: '| سفارش های من'
})

let { data } = await useFetch('/api/getUserOrders', {
  credentials: 'include'
})

console.log(data.value)
</script>
