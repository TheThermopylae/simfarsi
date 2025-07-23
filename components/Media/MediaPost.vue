<template>
  <article ref="postElement" class="mb-5 last:mb-32">
    <!-- Header -->
    <div class="container mb-3 flex justify-between items-center">
      <NuxtLink
        :to="`/media/user/${props.data.user}`"
        class="flex gap-2 items-center"
      >
        <img
          :src="`${$config.public.API_BASE_URL}${props.data.user.avatar}`"
          alt="profile"
          class="w-[35px] h-[35px] rounded-full"
        />
        <div class="text-2sm">
          <h4>IRiPhone</h4>
          <span class="text-[#707070]">ایران آیفون</span>
        </div>
      </NuxtLink>
      <div v-if="props.data.user._id == userData._id">
        <Button
          unstyled
          type="button"
          icon="pi pi-ellipsis-v"
          @click="toggle"
          aria-haspopup="true"
          aria-controls="overlay_menu"
        />
        <Menu
          pt:submenuLabel="!hidden"
          ref="menu"
          id="overlay_menu"
          :model="items"
          :popup="true"
        />
      </div>
      <div v-else>
        <Button
          v-if="!followedUser"
          label="دنبال کردن"
          pt:root="!text-xs"
          :loading="loadingFollow"
          @click="followUser"
        />
        <Button
          v-else
          label="لغو دنبال"
          pt:root="!text-xs !bg-white !text-black"
          :loading="loadingFollow"
          @click="unFollowUser"
        />
      </div>
    </div>

    <!-- Swiper Media -->
    <swiper
      :pagination="true"
      :space-between="5"
      :modules="modules"
      class="mySwiper h-[300px] w-full"
    >
      <swiper-slide
        v-for="(item, index) in props.data.media"
        :key="index"
        class="h-full w-full relative flex justify-center items-center"
      >
        <!-- Video -->
        <div v-if="isVideo(item)" class="relative w-full h-full">
          <video
            :ref="el => (videoRefs[index] = el)"
            class="w-full h-full object-cover"
            playsinline
            loop
            :data-src="`${config.public.API_BASE_URL}${item}`"
            @loadedmetadata="e => setVideoDuration(index, e)"
            @timeupdate="e => onTimeUpdate(index, e)"
          ></video>
          <!-- Remaining time -->
          <div
            class="absolute bottom-2 left-2 bg-black/60 text-white text-[11px] px-2 py-0.5 rounded"
          >
            {{ formatDuration(videoRemaining[index] ?? 0) }}
          </div>
        </div>

        <!-- Image -->
        <img
          v-else
          :src="`${config.public.API_BASE_URL}${item}`"
          :alt="props.data.caption"
          class="w-full h-full object-cover"
        />
      </swiper-slide>
    </swiper>

    <!-- Caption -->
    <p class="container text-xs mt-3">{{ props.data?.caption }}</p>

    <!-- Delete Dialog -->
    <Dialog
      v-model:visible="visible"
      modal
      header="حذف پست"
      :style="{ width: '90%' }"
    >
      <span class="text-surface-500 dark:text-surface-400 block mb-8">
        آیا می‌خواهید این پست را حذف کنید؟
      </span>
      <div class="grid grid-cols-2 gap-2">
        <Button
          type="button"
          pt:root="!bg-white !border !border-red-500 !text-red-500 !rounded"
          label="خیر"
          @click="visible = false"
        />
        <Button
          :loading="loading"
          type="button"
          label="بله"
          severity="primary"
          @click="removePostFunc"
        />
      </div>
    </Dialog>
    <Dialog
      v-model:visible="visibleEdit"
      modal
      header="ویرایش پست"
      pt:root="!w-[90%]"
    > 
      <div class="flx items-center gap-4 mb-4">
        <label for="caption" class="font-semibold block mb-2">کپشن : </label>
        <InputText
          id="caption"
          class="w-full"
          autocomplete="off"
          v-model="caption"
        />
      </div>
      <div class="flx items-center gap-4 mb-4">
        <label for="hashtags" class="font-semibold block mb-2"
          >هشتگ ها :
        </label>
        <div class="flex gap-2">
          <Button pt:root="!text-xs" label="افزودن" @click="addHashtag" />
          <InputText
            id="hashtags"
            class="w-full"
            autocomplete="off"
            v-model="hashtagValue"
          />
        </div>
        <div class="mt-3 flex gap-1">
          <Chip
            v-for="(item, index) in hashtags"
            :key="index"
            :label="item"
            removable
          >
            <template #removeicon>
              <i
                @click="hashtags.splice(index, 1)"
                class="pi pi-minus-circle"
              />
            </template>
          </Chip>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-2">
        <Button
          type="button"
          label="لغو"
          severity="secondary"
          pt:root="!bg-white !border-black !text-black"
          @click="visibleEdit = false"
        ></Button>
        <Button type="button" label="ویرایش" @click="editPost"></Button>
      </div>
    </Dialog>
    <Toast />
  </article>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'

const modules = [Pagination]
const config = useRuntimeConfig()

let { userData } = userAuth()
let { showToast } = useToastComp()

const props = defineProps(['data'])
const emit = defineEmits(['success', 'error'])

let loadingFollow = ref(false)

const visible = ref(false)
const loading = ref(false)
const menu = ref()

let visibleEdit = ref(false)

// Ref های ویدیو
const videoRefs = reactive([])
const videoDurations = ref({})
const videoRemaining = ref({})

// مدیریت تایمرها
const intervalRefs = {}

// منو
const items = ref([
  {
    items: [
      {
        label: 'ویرایش پست',
        icon: 'pi pi-pencil',
        command: () => (visibleEdit.value = true)
      },
      {
        label: 'حذف پست',
        icon: 'pi pi-trash',
        command: () => (visible.value = true)
      }
    ]
  }
])

const toggle = e => menu.value.toggle(e)

async function removePostFunc () {
  try {
    loading.value = true
    await $fetch('/api/media/removePost', {
      credentials: 'include',
      method: 'POST',
      body: { id: props.data.uuid }
    })
    visible.value = false
    return navigateTo('/media/user/me')
  } catch (err) {
    showToast('error', 'خطا', err.data)
  } finally {
    loading.value = false
  }
}

const isVideo = filename => /\.(mp4|webm|ogg|mov|avi|mkv)$/i.test(filename)

const setVideoDuration = (index, e) => {
  const duration = Math.floor(e.target.duration)
  videoDurations.value[index] = duration
  videoRemaining.value[index] = duration
}

const formatDuration = seconds => {
  const mins = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`
}

// تایمر معکوس و ریست آن هنگام لوپ
const onTimeUpdate = (index, e) => {
  const video = e.target
  if (video.currentTime < 0.5) {
    videoRemaining.value[index] = videoDurations.value[index]
  }
}

onMounted(() => {
  if (typeof window === 'undefined') return

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        const video = entry.target
        const index = videoRefs.indexOf(video)
        if (index === -1) return

        if (entry.isIntersecting) {
          if (!video.src && video.dataset.src) {
            video.src = video.dataset.src
          }
          video.play().catch(() => {})

          // ریست تایمر به مدت کل ویدیو
          videoRemaining.value[index] = videoDurations.value[index]

          if (!intervalRefs[index]) {
            intervalRefs[index] = setInterval(() => {
              if (videoRemaining.value[index] > 0) {
                videoRemaining.value[index]--
              }
            }, 1000)
          }
        } else {
          video.pause()
          video.currentTime = 0 // اینجا زمان ویدیو رو صفر کن
          if (intervalRefs[index]) {
            clearInterval(intervalRefs[index])
            intervalRefs[index] = null
          }
        }
      })
    },
    { threshold: 0.5 }
  )

  nextTick(() => {
    videoRefs.forEach(video => {
      if (video && typeof video.play === 'function') {
        observer.observe(video)
      }
    })
  })
})

onBeforeUnmount(() => {
  Object.values(intervalRefs).forEach(clearInterval)
})

// follow , unfollow
let { data: followings, refresh } = await useFetch('/api/media/getFollowing', {
  credentials: 'include'
})

let followedUser = computed(() =>
  followings.value.data.some(user => user._id == props.data.user)
)

async function followUser () {
  try {
    loadingFollow.value = true

    let data = await $fetch('/api/media/follow', {
      credentials: 'include',
      method: 'POST',
      body: { id: props.data.user }
    })

    await refresh()
  } catch (err) {
    showToast('error', 'خطا', err.data)
  } finally {
    loadingFollow.value = false
  }
}

async function unFollowUser () {
  try {
    loadingFollow.value = true

    let data = await $fetch('/api/media/unfollow', {
      credentials: 'include',
      method: 'POST',
      body: { id: props.data.user }
    })

    await refresh()
  } catch (err) {
    showToast('error', 'خطا', err.data)
  } finally {
    loadingFollow.value = false
  }
}

// edit post
let caption = ref(props.data.caption)
let hashtagValue = ref('')
let hashtags = ref(props.data.hashtags)

let loadingEdit = ref(false)

function addHashtag () {
  if (!hashtagValue.value)
    showToast('warn', 'هشدار', 'لطفا فیلد مربوط به هشتگ را پر کنید')
  else {
    hashtags.value.push(hashtagValue.value)
    hashtagValue.value = ''
  }
}

async function editPost () {
  let formData = new FormData()
  formData.append('id', props.data.uuid)
  formData.append('caption', caption.value)
  formData.append('hashtags', hashtags.value)

  try {
    loadingEdit.value = true

    let data = await $fetch('/api/media/editPost', {
      credentials: 'include',
      method: 'POST',
      body: formData
    })

    visibleEdit.value = false
    showToast('پست با موفقیت ویراش شد')
    emit('success')
  } catch (err) {
    showToast('error', 'خطا', err.data)
  } finally {
    loadingEdit.value = false
  }
}
</script>
