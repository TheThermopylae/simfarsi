<template>
  <div>
    <div class="mb-4">
      <h1 class="text-2xl mb-4">زیر دسته بندی ها</h1>
      <NuxtLink
        to="/admin-panel/subcategories/add-subcategories-page"
        class="btn-c py-3 px-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6 inline-block"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
        افزودن زیر دسته بندی
      </NuxtLink>
    </div>
    <p v-if="pending" class="text-gray-600 text-center">درحال بارگزاری</p>
    <div class="mt-5" v-else-if="categories.categorys.length > 0">
      <div
        class="border-b mb-3 border-gray-300"
        v-for="category in categories.categorys"
        :key="category._id"
      >
        {{ category.title }}
        <div class="grid grid-cols-2 gap-5">
          <AdminDashboardSubCategoryCardDash
            v-for="item in category.subcategories"
            :subcategory="item"
            :categoryId="category._id"
            @success="refreshDataFunc('زیر دسته بندی با موفقیت حذف شد')"
            @error="showErrorFunc"
            @successEdit="refreshDataFunc(' زیر دسته بندی با موفقیت ویرایش شد')"
            @errorEdit="showErrorFunc"
          ></AdminDashboardSubCategoryCardDash>
        </div>
      </div>
    </div>
    <p v-else class="text-gray-600 text-center">دسته بندی وجود ندارد</p>
    <Toast />
  </div>
</template>

<script setup>
let { showToast } = useToastComp()

let {
  data: categories,
  refresh,
  pending
} = await useAsyncData(() => $fetch('/api/admin/categories/getCategory'))

useHead({
  title: 'دسته بندی ها'
})

function refreshDataFunc (text) {
  refresh()
  showToast(text)
}

function showErrorFunc (err) {
  showToast('error', 'خطا ', err.data)
}
</script>
