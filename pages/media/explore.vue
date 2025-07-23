<template>
  <div>
    <!-- گرید پست‌ها -->
    <div class="grid grid-cols-3 gap-0.5 max--[640px]">
      <NuxtLink
        v-for="item in showPosts"
        :key="item._id"
        :to="`/media/post/${item._id}`"
      >
        <article class="relative aspect-square">
          <!-- فقط ویدیو -->
          <div v-if="isSingleVideo(item.media)" class="relative w-full h-full">
            <video
              :src="config.public.API_BASE_URL + item.media[0]"
              class="w-full h-full object-cover"
              preload="metadata"
              muted
              playsinline
            ></video>
            <!-- آیکون پلی فقط در حالت فقط ویدیو -->
            <div
              class="absolute inset-0 bg-black/30 flex items-center justify-center"
            >
              <svg
                class="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>

          <!-- فقط عکس -->
          <img
            v-else-if="isSingleImage(item.media)"
            :src="config.public.API_BASE_URL + item.media[0]"
            class="w-full h-full object-cover"
            alt="Post image"
          />

          <!-- ترکیبی (ویدیو + تصویر) بدون آیکون -->
          <img
            v-else
            :src="config.public.API_BASE_URL + item.media[0]"
            class="w-full h-full object-cover"
            alt="Post image"
          />
        </article>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'explore'
})
useHead({
  title: '| اکسپلور'
})

let { data } = await useFetch('/api/media/explore', {
  credentials: 'include'
})

let { userData } = userAuth()

let showPosts = computed(() =>
  data.value.explores.filter(
    post => post.user._id != userData.value._id && !post.iSstory
  )
)
const config = useRuntimeConfig()

const isVideo = filename => {
  return /\.(mp4|webm|ogg|mov|avi|mkv)$/i.test(filename)
}

const isSingleVideo = media => {
  return media?.length === 1 && isVideo(media[0])
}

const isSingleImage = media => {
  return media?.length === 1 && !isVideo(media[0])
}
</script>
