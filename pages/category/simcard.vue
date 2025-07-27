<template>
  <main>
    <div class="container">
      <CategorySimcardSellersSlider />
      <CategorySellSimCard />
      <CategoryOperatorsSection />
    </div>
    <CategoryAmazingSection :sims="amazingSimProducts" />
    <AdSection></AdSection>
  </main>
</template>

<script setup>
useHead({
  title: '| سیمکارت ها'
})

let config = useRuntimeConfig()

let { data: products } = await useFetch(
  `${config.public.API_BASE_URL}/simcard`,
  {
    credentials: 'include'
  }
)

let amazingSimProducts = computed(() =>
  products.value.all.filter(
    product => product.isamazing && product.division == 'sim'
  )
)

provide('amazingSimProducts',amazingSimProducts)
</script>
