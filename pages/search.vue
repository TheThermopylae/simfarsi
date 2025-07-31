<template>
  <div class="container">
    <h2>نتیجه ی جست و جوی شما :</h2>
    <!-- <SearchSection></SearchSection>
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
    <SearchSpecialCard></SearchSpecialCard> -->
    <AdSection
      :products="products.data"
      v-if="products && products.data.length > 0"
    />
    <p v-else class="text-xs text-center text-gray-400 mt-2">محصولی پیدا نشد</p>
  </div>
</template>

<script setup>
const route = useRoute()
const config = useRuntimeConfig()

const { data: products, refresh } = await useAsyncData('search-products', () =>
  $fetch(`${config.public.API_BASE_URL}/search`, {
    method: 'POST',
    body: { ...route.query }
  })
)

useHead({
  title: `| سرچ محصول ${route.query.search}`
})

// وقتی کوئری تغییر می‌کنه، دیتا رو مجدد بگیر
watch(
  () => route.query,
  async () => {
    await refresh()
    console.log(products.value)
  },
  { deep: true }
)
</script>
