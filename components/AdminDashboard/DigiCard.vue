<template>
  <article class="bg-white rounded-xl p-3 relative mb-3 last:mb-0">
    <div class="flex items-center gap-2 mb-2">
      <!-- <img
        :src="`${$config.public.API_BASE_URL}${props.data.img}`"
        :alt="'محصول  ' + props.data.title"
        class="size-[50px] rounded-md"
      /> -->
      <Image
        pt:root="!size-[50px]"
        pt:image="!object-cover !size-full !rounded-md"
        pt:rotateRightButton="!hidden"
        pt:rotateLeftButton="!hidden"
        pt:original="!rounded-md"
        :src="`${$config.public.API_BASE_URL}${props.data.img}`"
        :alt="'محصول  ' + props.data.title"
        preview
      />
      <h4 class="text-sm font-peydaBlack">{{ props.data.title }}</h4>
    </div>
    <div class="grid grid-cols-1">
      <h5 class="mb-2">
        دسته بندی :
        <span>{{ props.data.category.title }}</span>
      </h5>
      <h5 class="mb-2">
        قیمت :
        <span>{{ props.data.price.toLocaleString() }} تومان</span>
      </h5>
      <h5 class="mb-2">
        فروش : <span>{{ props.data.sale }}</span>
      </h5>
      <h5 class="mb-2">
        فروشنده : <span>{{ props.data.customername }}</span>
      </h5>
      <h5 class="mb-2">توضیحات :</h5>
      <p class="text-xs">{{ props.data.dec }}</p>
      <div
        class="flex justify-between items-center mt-2 pt-2 border-t border-sec"
      >
        <h5 class="font-peydaB">
          وضعیت آگهی :
          <span
            :class="{
              'text-red-500': !props.data.isaccept,
              'text-green-500': props.data.isaccept
            }"
            v-text="props.data.isaccept ? 'تایید شده' : 'تایید نشده'"
          ></span>
        </h5>
        <LoadingSpinner
          v-if="acceptLoading"
          class="w-3 h-3 mr-1"
        ></LoadingSpinner>
        <svg
          v-else
          @click="acceptProductFunc"
          xmlns="http://www.w3.org/2000/svg"
          width="1.3em"
          height="1.3em"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M16.977 19.5A9 9 0 0 0 10 3.223M16.977 19.5V16m0 3.5H20.5M7 4.516a9 9 0 0 0 7 16.261M7 4.516V8m0-3.484H3.5"
            color="currentColor"
          />
        </svg>
      </div>
    </div>
    <Toast />
    <svg
      @click="visible = true"
      class="absolute left-3 top-3"
      xmlns="http://www.w3.org/2000/svg"
      width="1.5em"
      height="1.5em"
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M14 11v6m-4-6v6M6 7v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7M4 7h16M7 7l2-4h6l2 4"
        stroke-width="1"
      />
    </svg>
    <Dialog
      v-model:visible="visible"
      modal
      header="حدف دسته بندی"
      class="w-11/12 md:w-2/3 lg:w-2/5 xl:w-1/4"
    >
      <span class="text-surface-500 dark:text-surface-400 block mb-8"
        >آیا میخواهید این محصول را حذف کنید؟</span
      >
      <div class="grid grid-cols-2 gap-2">
        <Button
          unstyled
          type="button"
          label="خیر"
          class="border border-red-500 px-5 py-1.5 rounded text-red-500"
          severity="secondary"
          @click="visible = false"
        ></Button>
        <Button
          unstyled
          label="بله"
          type="button"
          class="btn-c px-5 py-1.5"
          severity="secondary"
          :loading="removeLoading"
          @click="deleteProduct"
        ></Button>
      </div>
    </Dialog>
  </article>
</template>

<script setup>
let props = defineProps(['data'])
let emit = defineEmits(['changeAccept', 'deletedProduct'])

let { showToast } = useToastComp()

let acceptLoading = ref(false)
let visible = ref(false)
let removeLoading = ref(false)

async function acceptProductFunc () {
  try {
    acceptLoading.value = true

    let data = await $fetch('/api/admin/products/acceptProduct', {
      method: 'POST',
      credentials: 'include',
      body: { id: props.data._id }
    })

    showToast(data.data)
    emit('changeAccept')
  } catch (err) {
    showToast('error', 'خطا', err.data)
  } finally {
    acceptLoading.value = false
  }
}

async function deleteProduct () {
  removeLoading.value = true

  try {
    let data = await $fetch('/api/admin/products/removeProduct', {
      method: 'POST',
      headers: {
        credentials: 'include'
      },
      body: { id: props.data._id }
    })

    emit('deletedProduct')
  } catch (error) {
    showToast('error', 'خطا', 'مشکلی پیش آمده، لطفا دوباره تلاش کنید.')
  } finally {
    removeLoading.value = false
  }
}
</script>

<style scoped>
h5 {
  font-family: 'PeydaWebFaNum-Bold';
}

span {
  font-family: 'PeydaWebFaNum-Medium' !important;
}
</style>
