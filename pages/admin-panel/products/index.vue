<template>
  <div>
    <div class="md:flex justify-between items-center mb-10">
      <h1 class="text-3xl">محصولات</h1>
      <div class="md:flex gap-3">
        <NuxtLink
          to="/admin-panel/products/add-digi-page"
          class="bg-black text-white hover:opacity-90 transition-all p-3 rounded block text-center mb-2 md:m-0 md:inline-block"
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
          افزودن محصول دیجیتالی
        </NuxtLink>
        <NuxtLink
          to="/admin-panel/products/add-sim-page"
          class="bg-black text-white hover:opacity-90 transition-all p-3 rounded block text-center md:inline-block"
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
          افزودن سیمکارت
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
        @changeAmazing="refresh"
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
        @changeAmazing="refresh"
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
