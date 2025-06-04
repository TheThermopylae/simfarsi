<template>
  <section class="mb-5">
    <div
      v-for="item in items"
      :key="item.key"
      class="p-3 bg-[#F8F8F8] rounded text-c-primary mb-2 last:mb-0 flex gap-1 text-sm"
      :class="{ 'h-[100px]': item.key == 'توضیحات' }"
    >
      <h3 class="font-peydaB">{{ item.key }} :</h3>
      {{ item.value }}
    </div>
    <NuxtLink
      to="/"
      class="p-3 bg-[#F8F8F8] rounded mb-2 last:mb-0 flex gap-1 text-sm font-peydaB"
    >
      مشاهده همه محصولات این فروشگاه
    </NuxtLink>
  </section>
</template>

<script setup>
let items = ref([
  { key: 'شماره', value: '09121077650' },
  { key: 'اوپراتور', value: 'همراه اول - رند - کد 1' },
  { key: 'وضعیت', value: 'در حد صفر' },
  { key: 'شرایط فروش', value: 'نقد' },
  { key: 'نوع رند', value: 'آینه ای-هزاری از آخر' },
  { key: 'نوع شماره', value: 'دائمی' },
  { key: 'توضیحات', value: 'رند آینه ای هزاری از آخر مناسب ترین قیمت' }
])
</script>
