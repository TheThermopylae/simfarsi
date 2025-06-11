<template>
  <div>
    <div class="mb-5">
      <h1 class="text-3xl">ویرایش محصول {{ targetProduct.title }}</h1>
      <p class="mt-3">اطلاعات محصول مورد نظر را تغییر دهید</p>
    </div>
    <div>
      <form @submit.prevent="addProductFunc">
        <div class="grid grid-cols-2 gap-5 mt-4">
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
            <label for="product-des">توضیحات</label>
            <textarea
              id="product-des"
              class="block bg-white rounded w-full border mt-2 resize-none p-3"
              rows="3"
              v-model="productData.dec"
            ></textarea>
          </div>
          <div>
            <label for="product-category">دسته بندی</label>
            <!-- <input type="text" id="product-category" class="cinput mt-2" /> -->
            <select
              id="product-category"
              v-model="productData.category"
              class="select mt-2 border-black"
            >
              <option v-for="item in categories.categorys" :value="item._id">
                {{ item.title }}
              </option>
            </select>
          </div>
          <div>
            <label for="product-status">وضعیت سیمکارت</label>
            <input
              type="text"
              id="product-status"
              class="cinput mt-2"
              v-model="productData.simstatus"
            />
          </div>
          <div>
            <label for="product-sale">فروش</label>
            <select
              class="select border-black block w-full mt-2"
              id="product-sale"
              v-model="productData.sale"
            >
              <option value="نقد" selected>نقد</option>
              <option value="اقساطی">اقساطی</option>
            </select>
          </div>
          <div>
            <label for="product-operator">اوپراتور</label>
            <select
              class="select border-black block w-full mt-2"
              id="product-operator"
              v-model="productData.Operator"
            >
              <option value="ایرانسل" selected>ایرانسل</option>
              <option value="همراه اول">همراه اول</option>
              <option value="رایتل" selected>رایتل</option>
            </select>
          </div>
          <div class="col-span-2">
            <label for="product-numbertype">نوع شماره</label>
            <select
              class="select border-black block w-full mt-2"
              id="product-numbertype"
              v-model="productData.Numbertype"
            >
              <option value="اعتباری" selected>اعتباری</option>
              <option value="دائمی">دائمی</option>
            </select>
          </div>
          <div class="col-span-2">
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
        <button
          v-if="!loading"
          class="bg-black text-white px-4 py-3 rounded w-fit flex items-center justify-center gap-2 mt-5"
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
  title: 'افزودن محصول'
})

let { data: products } = await useAsyncData(() =>
  $fetch('/api/admin/products/getProducts', {
    headers: {
      credentials: 'include'
    }
  })
)
let { data: categories } = await useAsyncData(() =>
  $fetch('/api/admin/categories/getCategory', {
    headers: {
      credentials: 'include'
    }
  })
)

let route = useRoute()

let targetProduct = computed(() => {
  return products.value.products
    ? products.value.products.find(product => product._id === route.params.id)
    : []
})

let productData = reactive({
  title: targetProduct.value?.title,
  price: targetProduct.value?.price,
  category: targetProduct.value?.category,
  dec: targetProduct.value?.dec,
  simstatus: targetProduct.value?.simstatus,
  sale: targetProduct.value?.sale,
  Operator: targetProduct.value?.Operator,
  Numbertype: targetProduct.value?.Numbertype
})

let { showToast } = useToastComp()
let loading = ref(false)

async function addProductFunc () {
  if (!productData.title || !productData.price || !productData.category)
    showToast(
      'error',
      'خطا',
      'لطفا تمامی فیلد هارا پر کنید و حداقل یک عکس انتخاب کنید'
    )
  else {
    try {
      loading.value = true

      let data = await $fetch('/api/admin/products/updateProduct', {
        method: 'POST',
        headers: {
          credentials: 'include'
        },
        body: {
          id: targetProduct.value._id,
          title: productData.title,
          category: productData.category,
          dec: productData.dec,
          price: productData.price,
          simstatus: productData.simstatus,
          sale: productData.sale,
          Operator: productData.Operator,
          Numbertype: productData.Numbertype
        }
      })

      console.log(data)

      showToast('مشمخصات محصول با موفقیت ویرایش شد')
    } catch (error) {
      showToast('error', 'خطا', error?.data?.message || 'خطایی رخ داده است')
      console.log(error)
    } finally {
      loading.value = false
    }
  }
}
</script>
