<template>
  <div>
    <div class="lg:flex justify-between items-center mb-10">
      <h1 class="text-3xl">محصولات</h1>
      <div class="lg:flex items-center gap-5">
        <div class="relative">
          <input
            type="text"
            id="search-product"
            placeholder="جست و جوی محصول بر اساس عنوان"
            class="p-3 w-full lg:!w-80 set-ring my-5 lg:m-0 bg-white"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6 absolute left-2 bottom-1/2 translate-y-1/2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
        <NuxtLink
          to="/admin-panel/products/add-products-page"
          class="bg-black text-white hover:opacity-90 transition-all p-3 rounded"
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
          افزودن محصول
        </NuxtLink>
      </div>
    </div>
    <AdminDashboardProductsTable
      :products="products.products"
      v-if="products.products"
      @acceptDelete="refreshProducts"
    ></AdminDashboardProductsTable>
    <Transition>
      <div
        class="w-full h-full fixed bg-white left-0 z-10 top-0 flex justify-center items-center flex-col text-purple-c"
        v-if="loading"
      >
        <LoadingSpinner class="w-16 h-16 mb-4"></LoadingSpinner>
        درحال دریافت اطلاعات...
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { useToast } from 'vue-toastification'

useHead({
  title: 'محصولات'
})

let loading = ref(false)

let { data: products, refresh: refreshProducts } = await useAsyncData(() =>
  $fetch('/api/admin/products/getProducts', {
    headers: {
      credentials: 'include'
    }
  })
)

provide('refreshProducts', refreshProducts)
</script>
