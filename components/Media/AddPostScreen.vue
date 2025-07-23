<template>
  <section class="w-full h-full bg-black fixed top-0 right-0 z-50 p-5">
    <svg
      @click="$emit('closePostScreen')"
      class="text-white mb-5"
      xmlns="http://www.w3.org/2000/svg"
      width="2em"
      height="2em"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="m6.4 18.308l-.708-.708l5.6-5.6l-5.6-5.6l.708-.708l5.6 5.6l5.6-5.6l.708.708l-5.6 5.6l5.6 5.6l-.708.708l-5.6-5.6z"
      />
    </svg>
    <swiper
      :pagination="{
        clickable: true
      }"
      :modules="[Pagination]"
      :slidesPerView="1"
      :spaceBetween="30"
      class="mySwiper !pr-5 !pl-10"
    >
      <swiper-slide class="!w-72 !h-52" v-for="item in images">
        <img :src="item" alt="" class="size-full rounded-md" />
      </swiper-slide>
      <swiper-slide
        class="!w-72 !h-52"
        v-for="item in videos"
        v-if="videos.length > 0"
      >
        <video :src="item" controls class="w-full h-full rounded-md"></video>
      </swiper-slide>
    </swiper>
    <div class="absolute bottom-5 w-full right-0 px-5">
      <div class="flex gap-1 flex-wrap">
        <Chip
          removable
          class="!text-xs"
          v-for="(item, index) in hashtags"
          :key="index"
          :label="item"
        >
          <template #removeicon>
            <i class="pi pi-minus-circle" @click="hashtags.splice(index, 1)" />
          </template>
        </Chip>
      </div>
      <div class="flex items-enter gap-3 my-3">
        <Button
          label="افزودن هشتگ"
          class="!bg-white !text-black px-5 py-2 rounded-md !text-xs"
          @click="addHashtag"
        />
        <input
          type="text"
          placeholder="هشتگ را وارد کنید"
          class="placeholder:text-white border border-white flex-grow px-3 rounded-md text-white placeholder:text-xs text-xs"
          v-model="hashtagInput"
        />
      </div>
      <div class="flex items-ceter gap-3">
        <input
          type="text"
          placeholder="کپشن پست را وارد کنید"
          class="placeholder:text-white border border-white flex-grow py-2 px-3 rounded-md text-white placeholder:text-xs text-xs mb-3"
          v-model="data.caption"
        />
      </div>
      <Button
        label="ثبت پست"
        :loading="loading"
        class="!bg-white !text-black px-5 py-2 rounded-md !text-xs w-full"
        @click="sendPost"
      />
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import { Pagination } from 'swiper/modules'
import 'swiper/css/pagination'

let props = defineProps(['data'])
let emit = defineEmits(['closePostScreen', 'success', 'error'])

let loading = ref(false)

let images = ref([])
let videos = ref([])
let hashtags = ref([])
let hashtagInput = ref('')

onMounted(() => {
  props.data.img.forEach(item => {
    const imageUrl = URL.createObjectURL(item)
    images.value.push(imageUrl)
  })

  props.data.video.forEach(item => {
    const videoUrl = URL.createObjectURL(item)
    videos.value.push(videoUrl)
  })
})

function addHashtag () {
  if (!hashtagInput.value.trim()) {
    emit('error', 'لطفا هشتگ را وارد کنید')
  } else if (
    hashtags.value.includes(hashtagInput.value.trim().replace(' ', '_'))
  )
    emit('error', 'این هشتگ قبلا اضافه شده است')
  else {
    hashtags.value.push(hashtagInput.value.trim().replace(' ', '_'))
    hashtagInput.value = ''
  }
}

async function sendPost () {
  if (!props.data.caption.trim()) {
    emit('error', 'لطفا کپشن را وارد کنید')
    return
  } else {
    let formData = new FormData()

    formData.append('caption', props.data.caption.trim())
    formData.append('hashtags', props.data.hashtags)
    formData.append('isStory', true)
    props.data.img.forEach((file, index) => {
      formData.append(`img[${index}]`, file)
    })

    props.data.video.forEach((file, index) => {
      formData.append(`video[${index}]`, file)
    })

    try {
      loading.value = true

      let data = await $fetch('/api/media/addPost', {
        credentials: 'include',
        method: 'POST',
        body: formData
      })

      emit('success')
      emit('closePostScreen')
    } catch (error) {
      emit('error', 'مشکلی پیش آمده. لطفا دوباره تلاش کنید')
    } finally {
      loading.value = false
    }
  }
}

onUnmounted(() => {
  images.value.forEach(image => {
    URL.revokeObjectURL(image)
  })
  videos.value.forEach(video => {
    URL.revokeObjectURL(video)
  })

  props.data.caption = ''
  hashtags.value = []
  hashtagInput.value = ''
})
</script>

<style scoped>
section {
  backdrop-filter: blur(5px) saturate(180%);
  background-color: rgba(0, 0, 0, 0.95);
}
</style>
