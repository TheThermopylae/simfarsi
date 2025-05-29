<template>
  <AuthBackSection></AuthBackSection>
  <div class="container">
    <AuthInsertPhone @showOtpEmit="showOtp = true" v-if="!showOtp"></AuthInsertPhone>
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
