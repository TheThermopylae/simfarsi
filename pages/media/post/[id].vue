<template>
  <div>
    <MediaPost class="mb-0" v-if="findPost" :data="findPost" @success="refresh"></MediaPost>
    <!-- <MediaPost class="mb-0" v-if="otherPosts" :data="item" v-for="item in otherPosts" :key="item._id"></MediaPost> -->
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'explore'
})

let route = useRoute()

let { data: posts, refresh } = await useFetch('/api/media/explore', {
  credentials: 'include'
})

let findPost = computed(() => {
  return posts.value
    ? posts.value.explores.find(post => post._id === route.params.id)
    : null
})

useHead({
  title: `| ${findPost.value.caption}`
})
</script>
