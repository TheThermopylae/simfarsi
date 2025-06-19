<template>
  <div>
    <MediaStorySlider />
    <MediaPost v-for="item in 10" />
    <MediaAddPost />
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'explore'
})
</script>
