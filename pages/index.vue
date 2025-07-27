<template>
  <main>
    <div class="container">
      <MainHeroSlider></MainHeroSlider>
    </div>
    <MainTheCategories></MainTheCategories>
    <AmazingSection v-if="amazingDigiProducts" class="mt-10"></AmazingSection>
    <AdSection :products="products.all"></AdSection>
  </main>
</template>

<script setup>
useHead({
  title: '| صفحه اصلی'
})

let config = useRuntimeConfig()

let { data: products } = await useFetch(
  `${config.public.API_BASE_URL}/simcard`,
  {
    credentials: 'include'
  }
)

let amazingDigiProducts = computed(() =>
  products.value.all.filter(
    product => product.isamazing && product.division == 'digi'
  )
)

provide('amazingDigiProducts', amazingDigiProducts)
</script>
