<template>
  <div>
    <div class="mb-5">
      <h1 class="text-3xl">محصول جدید(سیمکارت)</h1>
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
              v-model="simData.title"
            />
          </div>
          <div>
            <label for="product-price">قیمت</label>
            <input
              type="number"
              id="product-price"
              class="cinput mt-2"
              v-model="simData.price"
            />
          </div>
          <div class="col-span-2">
            <label for="product-number">شماره</label>
            <InputText
              type="number"
              v-model="simData.phone"
              class="!rounded border !border-black w-full mt-2 !p-2.5 placeholder:text-[12px] text-left placeholder:text-right"
            />
          </div>
          <div class="col-span-2">
            <label for="product-des">توضیحات</label>
            <textarea
              id="product-des"
              class="block bg-white rounded w-full border mt-2 resize-none p-3"
              rows="3"
              v-model="simData.dec"
            ></textarea>
          </div>
          <div>
            <label for="product-status">وضعیت سیمکارت</label>
            <input
              type="text"
              id="product-status"
              class="cinput mt-2"
              v-model="simData.simstatus"
            />
          </div>
          <div>
            <label for="product-sale">فروش</label>
            <select
              class="select border-black block w-full mt-2"
              id="product-sale"
              v-model="simData.sale"
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
              v-model="simData.Operator"
            >
              <option value="ایرانسل" selected>ایرانسل</option>
              <option value="همراه اول">همراه اول</option>
              <option value="رایتل" selected>رایتل</option>
            </select>
          </div>
          <div>
            <label for="product-numbertype">نوع شماره</label>
            <select
              class="select border-black block w-full mt-2"
              id="product-numbertype"
              v-model="simData.Numbertype"
            >
              <option value="اعتباری" selected>اعتباری</option>
              <option value="دائمی">دائمی</option>
            </select>
          </div>
          <div>
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
  title: 'افزودن سیمکارت'
})

let simData = reactive({
  title: '',
  price: '',
  phone: '',
  dec: '',
  simstatus: '',
  sale: '',
  Operator: '',
  Numbertype: '',
  division: 'sim',
  role: 'ADMIN'
})

let { showToast } = useToastComp()
let loading = ref(false)

async function addProductFunc () {
  if (
    !simData.title ||
    !simData.price ||
    !simData.phone ||
    !simData.dec ||
    !simData.simstatus ||
    !simData.sale ||
    !simData.Operator ||
    !simData.Numbertype
  )
    showToast('warn', 'هشدار', 'باید تمامی فیلد های مورد نیاز را پر کنید')
  else {
    try {
      loading.value = true

      let formData = new FormData()

      formData.append('title', simData.title)
      formData.append('color', simData.color)
      formData.append('price', simData.price)
      formData.append('dec', simData.dec)
      formData.append('phone', simData.phone)
      formData.append('simstatus', simData.simstatus)
      formData.append('sale', simData.sale)
      formData.append('Operator', simData.Operator)
      formData.append('Numbertype', simData.Numbertype)
      formData.append('division', simData.division)
      formData.append('role', simData.role)

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
