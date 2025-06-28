<template>
  <div>
    <MediaPost class="mb-0" v-if="findPost" :data="findPost"></MediaPost>
    <MediaPost class="mb-0" v-if="otherPosts" :data="item" v-for="item in otherPosts" :key="item._id"></MediaPost>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'explore'
})

let route = useRoute()

let { data: posts } = await useFetch('/api/media/getPosts', {
  credentials: 'include'
})

let findPost = computed(() => {
  return posts.value
    ? posts.value.data.find(post => post._id === route.params.id)
    : null
})

let otherPosts = computed(() => {
  return posts.value
    ? posts.value.data.filter(post => post._id !== route.params.id)
    : null
})

console.log(otherPosts.value);


// console.log(findPost.value)
useHead({
  title: `| ${findPost.value.caption}`
})
</script>
