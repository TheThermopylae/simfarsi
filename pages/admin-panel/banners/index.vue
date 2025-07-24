<template>
  <main>
    <div class="md:flex justify-between items-center">
      <h1 class="text-3xl">مدیریت بنر ها</h1>
      <NuxtLink
        to="/admin-panel/banners/add"
        class="primary rounded px-4 py-3 flex items-center gap-1 w-fit mt-3 md:w-auto"
      >
        افزودن بنر
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.3em"
          height="1.3em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M13 6a1 1 0 1 0-2 0v5H6a1 1 0 1 0 0 2h5v5a1 1 0 1 0 2 0v-5h5a1 1 0 1 0 0-2h-5z"
          />
        </svg>
      </NuxtLink>
    </div>
  </main>
</template>

<script setup>
useHead({
  title: 'بنر ها'
})

let { data: banners } = useFetch('/api/admin/banners/getBanners', {
  credentials: 'include'
})
</script>
