<template>
  <tr class="last:border-0">
    <td class="flex items-center p-0">
      <div class="md:flex items-center ml-24">
        <img
          :src="`${config.public.API_BASE_URL}${props.product.img}`"
          class="w-16 h-16"
          alt="product-img"
        />
        <h4 class="text-[10px] lg:text-sm">{{ props.product.title }}</h4>
      </div>
    </td>
    <td>{{ props.product._id }}</td>
    <td>{{ props.product.dec }}</td>
    <td>{{ props.product.price.toLocaleString() }} تومان</td>
    <td>{{ props.product.category?.title }}</td>
    <td>{{ props.product.customername }}</td>
    <td>{{ props.product.phone }}</td>
    <td>{{ props.product.ad_type }}</td>
    <td>{{ props.product.simstatus }}</td>
    <td>{{ props.product.sale }}</td>
    <td>{{ props.product.Operator }}</td>
    <td>{{ props.product.Numbertype }}</td>
    <td>
      <LoadingSpinner v-if="acceptLoading"></LoadingSpinner>
      <svg
        v-else
        @click="acceptProductFunc"
        class="inline-block ml-2"
        xmlns="http://www.w3.org/2000/svg"
        width="1.3em"
        height="1.3em"
        viewBox="0 0 48 48"
      >
        <g
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="4"
        >
          <path d="M18 31h20V5" />
          <path d="M30 21H10v22m34-32l-6-6l-6 6" />
          <path d="m16 37l-6 6l-6-6" />
        </g>
      </svg>
      <svg
        v-if="props.product.isaccept"
        xmlns="http://www.w3.org/2000/svg"
        width="1.3em"
        height="1.3em"
        viewBox="0 0 16 16"
        class="m-auto text-green-500 inline-block"
      >
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="m2.75 8.75l3.5 3.5l7-7.5"
        />
      </svg>
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        width="1.3em"
        height="1.3em"
        viewBox="0 0 24 24"
        class="m-auto text-red-500 inline-block"
      >
        <path
          fill="currentColor"
          d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4"
        />
      </svg>
    </td>
    <td>{{ props.product.createdAt }}</td>
    <!-- <td>{{ props.product.userid }}</td> -->
    <td>
      <svg
        v-if="props.product.isexiting"
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        class="m-auto text-green-500"
      >
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="m2.75 8.75l3.5 3.5l7-7.5"
        />
      </svg>
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        class="m-auto text-red-500"
      >
        <path
          fill="currentColor"
          d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4"
        />
      </svg>
    </td>
    <td class="relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-6 cursor-pointer textleft absolute left-5 top-1/2 -translate-y-1/2 hover:bg-gray-100 transition-all rounded-full"
        @click="showMenu = true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
        />
      </svg>
      <Transition>
        <div
          v-if="showMenu"
          class="w-52 bg-gray-200 absolute left-1/2 bottom-0 p-2 rounded-lg z-10"
        >
          <nuxtLink
            :to="`/admin-panel/products/${props.product._id}`"
            class="block w-full text-right hover:bg-gray-300 transition-all py-1 px-1.5 rounded-lg"
          >
            ویرایش محصول
          </nuxtLink>
          <div>
            <button
              :disabled="loading"
              class="block w-full text-right hover:bg-red-500 hover:text-white transition-all py-1 px-1.5 rounded-lg"
              @click="deleteProduct"
            >
              حذف محصول
              <LoadingSpinner
                v-if="loading"
                class="w-2.5 h-2.5 mr-1"
              ></LoadingSpinner>
            </button>
          </div>
          <button
            class="block w-full text-right hover:bg-gray-300 transition-all rounded-lg py-1 px-1.5"
            @click="showMenu = false"
          >
            بستن
          </button>
        </div>
      </Transition>
    </td>
    <Toast />
  </tr>
</template>

<script setup>
let refreshProducts = inject('refreshProducts')

let config = useRuntimeConfig()
let showMenu = ref(false)

let props = defineProps(['product'])

let emit = defineEmits(['refreshing'])

let loading = ref(false)
let acceptLoading = ref(false)

let { showToast } = useToastComp()

async function acceptProductFunc () {
  try {
    acceptLoading.value = true

    let data = await $fetch('/api/admin/products/acceptProduct', {
      method: 'POST',
      credentials: 'include',
      body: { id: props.product._id }
    })

    await refreshProducts()
    showToast(data.data)
  } catch (err) {
    showToast('error', 'خطا', data.data)
  } finally {
    acceptLoading.value = false
  }
}

async function deleteProduct () {
  loading.value = true

  try {
    let data = await $fetch('/api/admin/products/removeProduct', {
      method: 'POST',
      headers: {
        credentials: 'include'
      },
      body: props.product
    })

    emit('deletedProduct')
    showToast('محصول مورد نظر شما حذف شد')
  } catch (error) {
    showToast('error', 'خطا', error.data.message)
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
td {
  text-align: center;
}
</style>
