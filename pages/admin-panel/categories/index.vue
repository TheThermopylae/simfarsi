<template>
  <div>
    <div class="mb-4">
      <h1 class="text-2xl mb-4">دسته بندی ها</h1>
      <NuxtLink
        to="/admin-panel/categories/add-categories-page"
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
        افزودن دسته بندی
      </NuxtLink>
    </div>
    <p v-if="pending" class="text-gray-600 text-center">درحال بارگزاری</p>
    <div
      class="grid grid-cols-2 gap-5 mt-5"
      v-else-if="categories.categorys.length > 0"
    >
      <AdminDashboardCategoryCardDash
        v-for="item in categories.categorys"
        :category="item"
        @success="refreshDataFunc('دسته بندی با موفقیت حذف شد')"
        @error="showErrorFunc"
        @successEdit="refreshDataFunc('دسته بندی با موفقیت ویرایش شد')"
        @errorEdit="showErrorFunc"
      ></AdminDashboardCategoryCardDash>
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
