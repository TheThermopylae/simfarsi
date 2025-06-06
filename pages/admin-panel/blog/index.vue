<template>
  <div>
    <div class="flex justify-between items-center">
      <h1 class="text-3xl">بلاگ</h1>
      <NuxtLink class="btn-c py-3 px-5" to="/admin-panel/blog/add-blog-page">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6 inline-block ml-1"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
        افزودن بلاگ
      </NuxtLink>
    </div>
    <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-5 mt-4" v-if="blogs">
      <AdminDashboardBlogCard
        v-for="item in blogs.blogs"
        :key="item._id"
        :data="item"
        @success="showSuccessToast"
      ></AdminDashboardBlogCard>
    </div>
    <Toast />
  </div>
</template>

<script setup>
useHead({
  title: 'بلاگ'
})

let { data: blogs, refresh } = await useAsyncData(() =>
  $fetch('/api/admin/blog/getBlogs')
)

let { showToast } = useToastComp()

function showSuccessToast () {
  refresh()
  showToast('بلاگ با موفقیت حذف شد')
}
</script>
