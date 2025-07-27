<template>
  <div
    class="flex justify-between items-ceter border-b border-gray-300 mb-4 pb-4 px-4"
  >
    <slot></slot>
  </div>
  <section>
    <AdCard
      v-for="item in props.products"
      :key="item._id"
      :data="item"
      v-if="props.products"
    ></AdCard>
    <p v-else class="text-center text-sm">محصولی وجود ندارد</p>
  </section>
</template>

<script setup>
let props = defineProps(['products'])
</script>
