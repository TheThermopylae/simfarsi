<template>
  <div>
    <h1 class="text-2xl xl:text-3xl mb-5">افزودن زیر دسته بندی</h1>
    <form @submit.prevent="addCategoryFunc" enctype="multipart/form-data">
      <div class="mt-2 mb-5 grid md:grid-cols-2 gap-5">
        <div>
          <label for="subcategory-category">عنوان زیر دسته بندی</label>
          <select
            id="subcategory-category"
            class="select border-black mt-3 block w-full"
            v-model="subCategoryData.categoryId"
          >
            <option v-for="item in categories.categorys" :value="item._id">
              {{ item.title }}
            </option>
          </select>
        </div>
        <div>
          <label for="subcategory-name">عنوان زیر دسته بندی</label>
          <input
            type="text"
            class="cinput set-ring mt-3"
            id="subcategory-name"
            v-model="subCategoryData.title"
          />
        </div>
        <div>
          <label for="subcategory-link">لینک زیر دسته بندی</label>
          <input
            type="text"
            class="cinput set-ring mt-3"
            id="subcategory-link"
            v-model="subCategoryData.href"
          />
        </div>
      </div>
      <button
        class="btn-c px-3 h-14 w-48 flex gap-2 items-center"
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
        افزودن زیر دسته بندی
      </button>
      <button
        class="btn-c h-14 w-48 flex gap-2 items-center"
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
let { data: categories } = await useAsyncData(() =>
  $fetch('/api/admin/categories/getCategory')
)

console.log(categories.value)

useHead({
  title: 'افزودن زیر دسته بندی'
})

let subCategoryData = ref({
  categoryId: '',
  title: '',
  href: ''
})
let loading = ref(false)

let { showToast } = useToastComp()

async function addCategoryFunc () {
  if (!subCategoryData.value.title || !subCategoryData.value.href)
    showToast(
      'error',
      'خطا',
      'برای افزودن دسته بندی باید یک عنوان و یک مسیر مشخص کنید'
    )
  else {
    try {
      console.log(subCategoryData.value)

      loading.value = true

      let data = await $fetch('/api/admin/categories/addSubCategory', {
        method: 'POST',
        headers: {
          credentials: 'include'
        },
        body: {
          title: subCategoryData.value.title,
          href: subCategoryData.value.href,
          categoryId : subCategoryData.value.categoryId
        }
      })

      showToast(
        'success',
        'موفقیت آمیز',
        'زیر دسته بندی شما با موفقیت اضافه شد'
      )
      return navigateTo('/admin-panel/subcategories')
    } catch (error) {
      showToast('error', ' خطا', error)
    } finally {
      loading.value = false
    }
  }
}
</script>
