<template>
  <div>
    <div class="mb-5">
      <h1 class="text-3xl">محصول جدید</h1>
      <p class="mt-3">محصول جدید و اطلاعات آن را اضافه کنید</p>
    </div>
    <div>
      <form @submit.prevent>
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
            <select
              v-model="productData.category"
              id="product-category"
              class="select mt-2 border-black block w-full"
            >
              <option
                v-for="item in category.categorys"
                :key="item._id"
                :value="item._id"
              >
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
        <img
          v-if="showImage"
          :src="showImage"
          alt="product-img"
          class="rounded-lg mt-5"
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
  title: 'افزودن محصول'
})

let { data: category } = await useFetch('/api/admin/categories/getCategory', {
  credentials: 'include'
})

let productData = reactive({
  title: '',
  price: '',
  category: '',
  dec: '',
  img: '',
  customername: 'amir',
  phone: '3432432',
  ad_type: 'vip',
  simstatus: '',
  sale: '',
  Operator: '',
  Numbertype: '',
  userid: '66e19a59a77e50137b4e39ab'
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
      formData.append('customername', productData.customername)
      formData.append('phone', productData.phone)
      formData.append('ad_type', productData.ad_type)
      formData.append('simstatus', productData.simstatus)
      formData.append('sale', productData.sale)
      formData.append('Operator', productData.Operator)
      formData.append('Numbertype', productData.Numbertype)
      formData.append('userid', productData.userid)

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
