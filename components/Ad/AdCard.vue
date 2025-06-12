<template>
  <article class="bg-[#F6F6F6] p-2 rounded flex gap-2 items-center mb-3 last:mb-0">
    <div class="w-[52px] h-[52px] rounded bg-white"></div>
    <div class="text-xs">
      <h4 class="mb-3">{{ props.data.title }}</h4>
      <span v-if="props.data.isaccept" class="text-green-500">تایید شده</span>
      <span v-else class="text-orange-500">در انتظار تایید</span>
    </div>
  </article>
</template>

<script setup>
let props = defineProps(['data'])
</script>
