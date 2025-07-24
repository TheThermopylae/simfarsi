<template>
  <main>
    <div class="container">
      <MainHeroSlider></MainHeroSlider>
    </div>
    <MainTheCategories></MainTheCategories>
    <AmazingSection v-if="amazingDigiProducts" class="mt-5"></AmazingSection>
    <AdSection></AdSection>
  </main>
</template>

<script setup>
useHead({
  title: '| صفحه اصلی'
})

let config = useRuntimeConfig()

let { data: products } = await useFetch(`/api/admin/products/getProducts`, {
  credentials: 'include'
})

let amazingDigiProducts = computed(() =>
  products.value.products.filter(
    product => product.isamazing && product.division == 'digi'
  )
)

provide('amazingDigiProducts', amazingDigiProducts)
</script>
