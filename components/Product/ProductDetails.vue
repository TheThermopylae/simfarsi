<template>
  <section>
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
let props = defineProps(['data'])

let items = ref([
  { key: 'شماره', value: props.data.phone },
  { key: 'اوپراتور', value: props.data.Operator },
  { key: 'وضعیت', value: props.data.simstatus },
  { key: 'شرایط فروش', value: props.data.sale },
  { key: 'توضیحات', value: props.data.dec }
])
</script>
