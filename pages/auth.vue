<template>
  <LazyAuthBackSection></LazyAuthBackSection>
  <div class="container">
    <!-- <LazyAuthInsertPhone></LazyAuthInsertPhone> -->
    <AuthInsertOtp></AuthInsertOtp>
  </div>
</template>

<script setup>
useHead({
  title: 'ورود به حساب کاربری'
})

definePageMeta({
  layout : false
})
</script>
