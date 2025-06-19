<template>
  <div class="container">
    <h1 class="text-xs">سبد خرید شما</h1>
    <section class="mt-5">
      <BasketItemCard v-for="item in items" :key="item.title" :item="item" />
    </section>
    <BasketAcceptItems :data="items" />
  </div>
</template>

<script setup>
useHead({
  title: '| سبد خرید'
})

let items = ref([
  {
    title: 'کتاب نه داستان اثر جی. دی. سلینجر نشر ماهی',
    img: 'https://dkstatics-public.digikala.com/digikala-products/112161622.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80',
    price: 180_000
  },
  {
    title:
      'لپ تاپ 15.6 اینچی ایسوس مدل Vivobook S15 Q5507Q-x1p512-Snapdragon X Plus-16GB LPDDR5X-512GB SSD-OLED-Backlit-W',
    img: 'https://dkstatics-public.digikala.com/digikala-products/cb4159b05c315859cbfbf616e134f5bbdb55b18e_1747130176.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80',
    price: 66_900_000
  }
])
</script>
