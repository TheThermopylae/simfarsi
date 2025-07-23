<template>
  <section class="my-5">
    <Image
      :src="`${$config.public.API_BASE_URL}${props.data.img}`"
      pt:image="!w-full !rounded-md"
      pt:root="!w-full"
      pt:rotateRightButton="!hidden"
      pt:rotateLeftButton="!hidden"
      alt="product-image"
      preview
    />
    <NuxtLink to="/" class="text-[#8C8E91] text-[8px]">کنسول</NuxtLink>
    <h1>{{ props.data.title }}</h1>
    <div class="mt-3">
      <h2 class="text-xs mb-2">توضیحات محصول</h2>
      <div
        class="h-[150px] bg-[#F8F8F8] p-2 rounded text-2sm border border-gray-200"
      >
        <p>{{ props.data.dec }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
let props = defineProps(['data'])
</script>
