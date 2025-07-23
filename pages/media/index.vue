<template>
  <div>
    <MediaStorySlider />
    <section>
      <MediaPost
        v-if="posts.posts"
        v-for="item in posts.posts"
        :data="item"
        @success="showSuccessRemovePost"
        @error="
          showToast('error', 'خطا', 'مشکلی پیش آمده لطفا دوباره تلاش کنید')
        "
      />
    </section>
    <MediaAddPost @select-media="selectMediaFunc" />
    <Transition>
      <MediaAddPostScreen
        @closePostScreen="showAddPostScreenFunc"
        @success="showSuccessFunc"
        @error="showErrorFunc"
        v-if="showAddPostScreen && postData.img"
        :data="postData"
      />
    </Transition>
    <Toast />
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'explore'
})

useHead({
  title : '| هشتگ'
})

let { showToast } = useToastComp()

let { data: posts, refresh } = await useFetch('/api/media/feed', {
  credentials: 'include'
})

console.log(posts.value);


let postData = reactive({
  caption: '',
  hashtags: '',
  img: [],
  video: []
})

let showAddPostScreen = ref(false)

function selectMediaFunc (img, video) {
  postData.img = img
  postData.video = video
  showAddPostScreen.value = true
}

function showAddPostScreenFunc () {
  postData.img = []
  postData.video = []

  showAddPostScreen.value = false
}

function showSuccessFunc () {
  showToast('پست با موفقیت اضافه شد')
  refresh()
}

function showErrorFunc (text) {
  showToast('error', 'خطا', text)
}

function showSuccessRemovePost () {
  showToast('پست با موفقیت حذف شد')
  refresh()
}
</script>
