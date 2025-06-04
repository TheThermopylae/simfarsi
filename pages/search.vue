<template>
  <div class="container">
    <SearchSection></SearchSection>
    <SearchRecentSearch />
    <div class="flex justify-between mt-3 text-sm">
      <h2>محصولات محبوب</h2>
      <NuxtLink to="/" class="text-[#454545]">همه</NuxtLink>
    </div>
    <SimpleCardSlider></SimpleCardSlider>
    <div class="flex justify-between mt-3 text-sm">
      <h2>خاص ترین سیمکارت</h2>
      <NuxtLink to="/" class="text-[#010562]">همه</NuxtLink>
    </div>
    <SearchSpecialCard></SearchSpecialCard>
  </div>
</template>

<script setup>
let route = useRoute()

useHead({
  title: `| سرچ محصول ${route.query.search}`
})
</script>
