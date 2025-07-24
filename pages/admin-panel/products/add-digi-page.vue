<template>
  <div>
    <div class="mb-5">
      <h1 class="text-3xl">محصول جدید(دیجیتالی)</h1>
      <p class="mt-3">محصول جدید و اطلاعات آن را اضافه کنید</p>
    </div>
    <div>
      <form @submit.prevent>
        <div class="grid grid-cols-2 gap-3 mt-4">
          <div>
            <label for="product-title">عنوان</label>
            <input
              type="text"
              id="product-title"
              class="cinput mt-2"
              v-model="productData.title"
            />
          </div>
          <div>
            <label for="product-price">قیمت</label>
            <input
              type="number"
              id="product-price"
              class="cinput mt-2"
              v-model="productData.price"
            />
          </div>
          <div class="col-span-2">
            <label for="product-category">دسته بندی</label>
            <select
              v-if="categories"
              class="select border-black mt-2 block w-full"
              id="product-category"
              v-model="productData.category"
            >
              <option :value="item._id" v-for="item in categories.categorys">
                {{ item.title }}
              </option>
            </select>
          </div>
          <div class="col-span-2">
            <label for="product-des">توضیحات</label>
            <textarea
              id="product-des"
              class="block bg-white rounded w-full border mt-2 resize-none p-3"
              rows="3"
              v-model="productData.dec"
            ></textarea>
          </div>
          <div class="mb-2">
            <label for="product-image">تصویر</label>
            <input
              id="product-image"
              name="image"
              accept="image/*"
              type="file"
              class="file-input file-input-ghost w-full mt-2 block border border-purple-c"
              @change="handleImageUpload"
            />
          </div>
        </div>
        <Image
          v-if="showImage"
          :src="showImage"
          pt:image="!w-32 !h-32 !rounded-md"
          pt:root="!w-32 !h-32"
          pt:rotateRightButton="!hidden"
          pt:rotateLeftButton="!hidden"
          alt="product-image"
          preview
        />
        <button
          @click="addProductFunc"
          v-if="!loading"
          class="bg-black text-white px-4 py-3 rounded w-fit flex items-center justify-center gap-2 mt-5 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="size-6 inline-block"
          >
            <path
              fill-rule="evenodd"
              d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
              clip-rule="evenodd"
            />
          </svg>
          افزودن جدید
        </button>
        <button
          :disabled="loading"
          v-else
          class="bg-black text-white px-4 py-3 rounded w-fit flex items-center justify-center gap-2 mt-5"
        >
          <LoadingSpinner></LoadingSpinner>
        </button>
      </form>
    </div>
    <Toast />
  </div>
</template>

<script setup>
useHead({
  title: 'افزودن محصول دیجیتالی'
})

let { data: categories } = useFetch('/api/admin/categories/getCategory', {
  credentials: 'include'
})

let productData = reactive({
  title: '',
  price: '',
  category: '',
  dec: '',
  img: '',
  role: 'ADMIN',
  division: 'digi'
})

const showImage = ref('')

function handleImageUpload (event) {
  const file = event.target.files[0]
  if (!file) return

  productData.img = file
  const reader = new FileReader()
  reader.onload = e => {
    showImage.value = e.target.result
  }
  reader.readAsDataURL(file)
}

let { showToast } = useToastComp()
let loading = ref(false)

async function addProductFunc () {
  if (!productData.title || !productData.price || !productData.category)
    showToast('error', 'خطا', 'لطفا تمامی فیلد های مورد نیاز را پر کنید')
  else {
    try {
      loading.value = true

      let formData = new FormData()

      formData.append('title', productData.title)
      formData.append('color', productData.color)
      formData.append('price', productData.price)
      formData.append('category', productData.category)
      formData.append('img', productData.img)
      formData.append('division', productData.division)
      formData.append('role', productData.role)

      let data = await $fetch('/api/admin/products/addProduct', {
        method: 'POST',
        headers: {
          credentials: 'include'
        },
        body: formData
      })

      showToast('محصول با موفقیت اضافه شد')
    } catch (error) {
      showToast('error', 'خطا', error.data)
    } finally {
      loading.value = false
    }
  }
}
</script>
