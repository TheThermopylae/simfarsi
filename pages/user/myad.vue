<template>
  <section class="container">
    <nuxtLink
      to="/user/ad"
      class="mb-4 text-xs flex items-center gap-2 font-peydaB"
    >
      <div class="size-5 rounded-full bg-black flex-center">
        <svg
          width="6"
          height="11"
          viewBox="0 0 6 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.904459 11L6 5.5L0.904459 0L0 0.97625L4.19108 5.5L0 10.0238L0.904459 11Z"
            fill="white"
          />
        </svg>
      </div>
      آکهی های من
    </nuxtLink>
    <AdMyAdCard v-for="item in data.products" :data="item" :key="item._id" />
  </section>
</template>

<script setup>
useHead({
  title: '| آگهی های من'
})

let { data, refresh } = await useFetch('/api/ad/getAds', {
  credentials: 'include'
})

provide('refresh', refresh)
</script>
