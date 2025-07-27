<template>
  <div class="shadow-c-md rounded-full relative w-[60px] h-[60px]">
    <NuxtLink :to="`/shop/${props.data._id}`">
      <img
        :src="`${$config.public.API_BASE_URL}${props.data.img}`"
        class="w-full h-full rounded-full"
        :alt="'فروشگاه ' + props.data.name"
      />
    </NuxtLink>
  </div>
</template>

<script setup>
let props = defineProps(['data'])
</script>
