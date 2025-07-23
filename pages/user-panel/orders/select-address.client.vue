<template>
  <div class="container">
    <OrdersBackSelectAddress />
    <h1 class="mt-3">انتخاب آدرس</h1>
    <section class="mt-3">
      <OrdersAddressCard v-for="item in 4" :key="item" />
    </section>
    <nuxtLink to="/" class="primary block p-4 rounded-full text-center mt-3">انتخاب آدرس</nuxtLink>
  </div>
</template>
