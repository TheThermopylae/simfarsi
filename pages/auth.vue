<template>
  <LazyAuthBackSection></LazyAuthBackSection>
  <div class="container">
    <LazyAuthInsertPhone @showOtpEmit="showOtp = true" v-if="!showOtp"></LazyAuthInsertPhone>
    <AuthInsertOtp v-else></AuthInsertOtp>
  </div>
</template>

<script setup>
useHead({
  title: 'ورود به حساب کاربری'
})

definePageMeta({
  layout : false
})

let showOtp = ref(false)
</script>
