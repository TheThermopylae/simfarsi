<template>
  <main>
    <NuxtPage></NuxtPage>
  </main>
</template>

<script setup>
definePageMeta({
  middleware: ['not-logged', 'is-admin'],
  redirect: '/user-panel/user-account'
})

useHead({
  titleTemplate: 'پنل کاربری %s'
})
</script>
