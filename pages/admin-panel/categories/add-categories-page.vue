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
      </div>
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
  href: ''
})
let loading = ref(false)

let { showToast } = useToastComp()

async function addCategoryFunc () {
  if (!categoryData.value.title || !categoryData.value.href)
    showToast(
      'error',
      'خطا',
      'برای افزودن دسته بندی باید یک عنوان و یک مسیر مشخص کنید'
    )
  else {
    try {
      loading.value = true

      let data = await $fetch('/api/admin/categories/addCategory', {
        method: 'POST',
        headers: {
          credentials: 'include'
        },
        body: { title: categoryData.value.title, href: categoryData.value.href }
      })

      showToast('success', 'موفقیت آمیز', 'دسته بندی شما با موفقیت اضافه شد')
      // return navigateTo('/admin-panel/categories')
    } catch (error) {
      showToast('error', ' خطا', error)
    } finally {
      loading.value = false
    }
  }
}
</script>
