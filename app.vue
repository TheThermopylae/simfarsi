<template>
  <NuxtLoadingIndicator></NuxtLoadingIndicator>
  <NuxtLayout>
    <NuxtPage></NuxtPage>
  </NuxtLayout>
</template>

<script setup>
useHead({
  titleTemplate : 'سیمکارت شاپ %s'
})
</script>