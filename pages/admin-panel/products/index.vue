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
    <h2>سیمکارت ها</h2>
    <section class="my-3">
      <AdminDashboardSimCard
        v-for="item in simProducts"
        :key="item._id"
        :data="item"
        @changeAccept="refresh"
        @deletedProduct="refreshingProducts"
      />
    </section>
    <h2>دیجیتال</h2>
    <section class="mt-3">
      <AdminDashboardDigiCard
        v-for="item in digiProducts"
        :key="item._id"
        :data="item"
        @changeAccept="refresh"
        @deletedProduct="refreshingProducts"
      />
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'محصولات'
})

let { showToast } = useToastComp()

let { data: products, refresh } = await useAsyncData(() =>
  $fetch('/api/admin/products/getProducts', {
    headers: {
      credentials: 'include'
    }
  })
)

let simProducts = computed(() =>
  products.value.products.filter(product => product?.division == 'sim')
)

let digiProducts = computed(() =>
  products.value.products.filter(product => product?.division == 'digi')
)

async function refreshingProducts () {
  await refresh()
  showToast('محصول مورد نظر شما حذف شد')
}
</script>
