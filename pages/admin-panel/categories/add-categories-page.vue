<template>
  <div>
    <h1 class="text-2xl xl:text-3xl mb-5">افزودن دسته بندی</h1>
    <form @submit.prevent="addCategoryFunc" enctype="multipart/form-data">
      <div class="mt-2 mb-5 grid md:grid-cols-2 gap-5">
        <div>
          <label for="category-name">عنوان دسته بندی</label>
          <input
            type="text"
            class="cinput set-ring mt-3"
            id="category-name"
            v-model="categoryData.title"
          />
        </div>
        <div>
          <label for="category-link">لینک دسته بندی</label>
          <input
            type="text"
            class="cinput set-ring mt-3"
            id="category-link"
            v-model="categoryData.href"
          />
        </div>
        <div>
          <label for="product-image">تصویر</label>
          <input
            id="product-image"
            name="image"
            accept="image/*"
            type="file"
            class="file-input file-input-ghost w-full mt-2 block border border-purple-c"
            @change="handleImageUpload"
          />
        </div>
      </div>
      <img
        v-if="showImage"
        :src="showImage"
        alt="product-img"
        class="rounded-lg my-5 size-24"
      />
      <button
        class="btn-c px-3 h-14 w-44 flex gap-2 items-center"
        @click=""
        v-if="!loading"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
        افزودن دسته بندی
      </button>
      <button
        class="btn-c h-14 w-44 flex gap-2 items-center"
        v-else="!loading"
        :disabled="loading"
      >
        <LoadingSpinner></LoadingSpinner>
      </button>
    </form>
    <Toast />
  </div>
</template>

<script setup>
useHead({
  title: 'افزودن دسته بندی'
})

let categoryData = ref({
  title: '',
  href: '',
  img: ''
})
let loading = ref(false)

let showImage = ref(null)

let { showToast } = useToastComp()

function handleImageUpload (event) {
  const file = event.target.files[0]
  if (!file) return

  categoryData.value.img = file
  const reader = new FileReader()
  reader.onload = e => {
    showImage.value = e.target.result
  }
  reader.readAsDataURL(file)
}

async function addCategoryFunc () {
  if (!categoryData.value.title || !categoryData.value.href)
    showToast(
      'warn',
      'هشدار',
      'برای افزودن دسته بندی باید یک عنوان و یک مسیر مشخص کنید'
    )
  else {
    try {
      loading.value = true

      let formData = new FormData()

      formData.append('title', categoryData.value.title)
      formData.append('href', categoryData.value.href)
      formData.append('img', categoryData.value.img)

      let data = await $fetch('/api/admin/categories/addCategory', {
        method: 'POST',
        headers: {
          credentials: 'include'
        },
        body: formData
      })

      showToast('success', 'موفقیت آمیز', 'دسته بندی شما با موفقیت اضافه شد')
    } catch (error) {
      showToast('error', ' خطا', error)
    } finally {
      loading.value = false
    }
  }
}
</script>
