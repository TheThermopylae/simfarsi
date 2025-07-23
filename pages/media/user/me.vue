<template>
  <div class="mt-3">
    <section class="container">
      <h1 class="text-xs">پروفایل من</h1>

      <!-- اطلاعات کلی -->
      <section
        class="grid grid-cols-3 text-center my-5 items-start justify-between"
      >
        <div class="place-self-start">
          <span class="text-xs">{{ posts.data.length }}</span>
          <h3 class="text-2sm font-peydaB">پست‌ها</h3>
        </div>
        <div>
          <span class="text-xs">{{ followers?.data.length }}</span>
          <h3 class="text-2sm font-peydaB">دنبال‌کننده‌ها</h3>
        </div>
        <div class="place-self-end">
          <span class="text-xs">{{ followings?.data.length }}</span>
          <h3 class="text-2sm font-peydaB">دنبال‌شونده‌ها</h3>
        </div>
      </section>
    </section>

    <!-- عنوان پست‌ها -->
    <h2 class="text-xs container mb-3">پست‌های من</h2>

    <!-- گرید پست‌ها -->
    <div class="grid grid-cols-3 gap-0.5">
      <NuxtLink
        v-for="item in posts.data"
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
  title : '| پروفایل من'
})

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

let { data: posts } = await useFetch('/api/media/getPosts', {
  credentials: 'include'
})

console.log(posts.value);


let { data: followers } = await useFetch('/api/media/getFollowers', {
  credentials: 'include'
})

let { data: followings } = await useFetch('/api/media/getFollowing', {
  credentials: 'include'
})
</script>
