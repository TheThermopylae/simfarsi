<template>
  <div>
    <div class="grid grid-cols-3 auto-rows-fr gap-1 p-1">
      <div
        class="bg-[#D9D9D9]"
        v-for="item in items"
        :class="{
          'aspect-square': item == 'img',
          'row-span-2': item == 'video'
        }"
      ></div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'explore'
})
useHead({
  title : '| اکسپلور'
})

let items = [
  'img',
  'video',
  'img',
  'img',
  'img',
  'img',
  'video',
  'img',
  'video',
  'video',
  'img'
]
</script>
