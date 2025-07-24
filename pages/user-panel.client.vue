<template>
  <main>
    <NuxtPage></NuxtPage>
  </main>
</template>

<script setup>
definePageMeta({
  middleware: ['not-logged', 'is-admin']
})

useHead({
  titleTemplate: 'پنل کاربری %s'
})
</script>
