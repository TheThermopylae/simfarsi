<template>
  <div>
    <h1 class="text-3xl">سفارشات</h1>
    <AdminDashboardOrdersStatus
      v-if="orders"
      :orders="orders.data"
    ></AdminDashboardOrdersStatus>
    <!-- <h2 class="mb-5 text-xl">سفارشات</h2>
    <AdminDashboardOrderTable
      :orders="orders.orders"
      v-if="orders"
    ></AdminDashboardOrderTable> -->
    <section class="grid md:grid-cols-2 xl:grid-cols-3 gap-3">
      <AdminDashboardNewOrderCard
        @changedStatus="refresh"
        v-for="item in orders.data"
        :key="item._id"
        :data="item"
      />
    </section>
  </div>
</template>
<script setup>
useHead({
  title: 'سفارشات'
})

let { data: orders, refresh } = await useFetch('/api/admin/orders/getOrders', {
  credentials: 'include'
})

console.log(orders.value)

provide('refresh', refresh)
</script>
