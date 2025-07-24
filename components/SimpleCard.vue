<template>
  <article
    class="shadow-md bg-white rounded-xl p-3 min-h-[220px] max-h-[350px] flex flex-col justify-between"
  >
    <NuxtLink
      :to="{
        path: '/digital',
        query: { uid: props.data.uid, title: props.data.title }
      }"
    >
      <div class="w-full aspect-square sm:aspect-[4/3]">
        <img
          :src="`${$config.public.API_BASE_URL}${props.data.img}`"
          alt="card-img"
          class="w-full h-full object-cover rounded-xl"
        />
      </div>
      <h4 class="mt-2 text-xs">
        {{ props.data.title }}
      </h4>
    </NuxtLink>
    <div class="flex justify-end gap-2 mt-4">
      <span>{{ props.data.price.toLocaleString() }} ت</span>
    </div>
  </article>
</template>

<script setup>
let props = defineProps(['data'])
</script>
