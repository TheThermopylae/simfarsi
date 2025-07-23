<template>
  <div>
    <h1 class="text-3xl">سفارشات</h1>
    <AdminDashboardOrdersStatus
      v-if="orders"
      :orders="orders.data"
    ></AdminDashboardOrdersStatus>
    <h2 class="mb-3">سفارشات دیجیتالی</h2>
    <section
      class="grid md:grid-cols-2 xl:grid-cols-3 gap-3"
      v-if="digiProducts.length > 0"
    >
      <AdminDashboardDigiOrderCard
        @changedStatus="refresh"
        v-for="item in digiProducts"
        :key="item._id"
        :data="item"
      />
    </section>
    <p v-else class="text-sm text-center text-gray-500 mt-2">
      سفارشی وجود ندارد
    </p>
    <h2 class="my-3">سفارشات سیمکارت</h2>
    <section class="grid md:grid-cols-2 xl:grid-cols-3 gap-3">
      <AdminDashboardSimOrderCard
        @changedStatus="refresh"
        v-for="item in simProducts"
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

let digiProducts = computed(() =>
  orders.value.data.filter(order => order.products.length > 0)
)

let simProducts = computed(() =>
  orders.value.data.filter(order => order.products.length == 0)
)

provide('refresh', refresh)
</script>
