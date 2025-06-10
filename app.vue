<template>
  <NuxtLoadingIndicator></NuxtLoadingIndicator>
  <NuxtLayout>
    <NuxtPage></NuxtPage>
  </NuxtLayout>
</template>

<script setup>
useHead({
  titleTemplate: 'سیمکارت شاپ %s'
})
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>

<!-- <Select
  v-model="selectetType"
  :options="status"
  placeholder="وضعیت خط"
  class="w-full"
  :pt="{
    option: ({ context }) => ({
      class: context.selected ? '!bg-black !text-white' : ''
    })
  }"
/> -->
