<template>
  <main>
    <NuxtPage></NuxtPage>
  </main>
</template>

<script setup>
definePageMeta({
  middleware: 'not-logged'
})

useHead({
  titleTemplate : 'پنل کاربری %s'
})
</script>