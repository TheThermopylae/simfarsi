<template>
  <div class="container">
    <div class="mb-5">
      <h1 class="mb-1">ایجاد فروشگاه من</h1>
      <p>برای فعالیت حرفه ای در سیم شاپ باید کسب وکار خود را ثبت کنید.</p>
    </div>
    <div class="mb-5">
      <h2>نام کسب و کار</h2>
      <p class="mt-1">کسب و کار شما با این نام نمایش داده می شود</p>
      <input
        type="text"
        class="rounded-2xl bg-[#F8F8F8] p-5 w-full mt-4"
        placeholder="مثال : فروشگاه افشار"
        v-model="shopData.nameshop"
      />
    </div>
    <div class="mb-5">
      <label for="type" class="font-peydaBlack">نام شما</label>
      <input
        type="text"
        class="rounded-2xl bg-[#F8F8F8] p-5 w-full mt-4"
        placeholder="نام شما چیست"
        v-model="shopData.name"
      />
    </div>
    <div class="mb-5">
      <label for="type" class="font-peydaBlack">شماره موبایل</label>
      <input
        type="number"
        class="rounded-2xl bg-[#F8F8F8] p-5 w-full mt-4"
        placeholder="شماره موبایل خود را وارد کنید"
        v-model="shopData.phone"
      />
    </div>
    <div class="mb-5">
      <label for="type" class="font-peydaBlack">شماره ثابت</label>
      <input
        type="number"
        class="rounded-2xl bg-[#F8F8F8] p-5 w-full mt-4"
        placeholder="شماره ثابت خود را وارد کنید"
        v-model="shopData.phonehome"
      />
    </div>
    <div class="my-5">
      <label for="des" class="font-peydaBlack">توضیحات فروشگاه</label>
      <textarea
        v-model="shopData.shomedec"
        id="des"
        class="bg-[#F8F8F8] rounded-2xl p-5 block w-full mt-3 placeholder:text-xs placeholder:text-black text-xs resize-none"
        placeholder="توضیحات فروشگاه خود را بنویسید"
        rows="8"
      ></textarea>
    </div>
    <div class="my-5">
      <label for="des" class="font-peydaBlack">استان</label>
      <Select
        v-model="shopData.ostan"
        :options="states"
        optionLabel="name"
        placeholder="استان محل فروشگاه خود را انتخاب کنید"
        class="w-full"
        :pt="{
          option: ({ context }) => ({
            class: context.selected ? '!bg-black !text-white !rounded-xl' : ''
          }),
          root: '!p-5 !bg-[#F8F8F8] !text-xs !rounded-2xl !mt-3',
          label: '!p-0',
          dropdownIcon: '!text-black',
          overlay: '!bg-[#F8F8F8] !text-xs !rounded-2xl !border-none'
        }"
      />
    </div>
    <div class="my-5" v-if="shopData.ostan">
      <label for="des" class="font-peydaBlack">شهر</label>
      <Select
        v-model="shopData.shahr"
        :options="cities"
        optionLabel="name"
        placeholder="استان محل فروشگاه خود را انتخاب کنید"
        class="w-full"
        :pt="{
          option: ({ context }) => ({
            class: context.selected ? '!bg-black !text-white !rounded-xl' : ''
          }),
          root: '!p-5 !bg-[#F8F8F8] !text-xs !rounded-2xl !mt-3',
          label: '!p-0',
          dropdownIcon: '!text-black',
          overlay: '!bg-[#F8F8F8] !text-xs !rounded-2xl !border-none'
        }"
      />
    </div>
    <div class="my-5">
      <label for="des" class="font-peydaBlack">آدرس فروشگاه</label>
      <textarea
        v-model="shopData.address"
        id="des"
        class="bg-[#F8F8F8] rounded-2xl p-5 block w-full mt-3 placeholder:text-xs placeholder:text-black text-xs resize-none"
        placeholder="آدرس فروشگاه خود را بنویسید"
        rows="8"
      ></textarea>
    </div>
    <div class="mb-5">
      <label class="font-peydaBlack">عکس فروشگاه</label>
      <UserDashboardAddShopUploadPic @selectedFile="setImg" />
      <div v-if="showImg" class="flex items-center gap-2">
        <Image
          :src="showImg"
          alt="shop-img"
          pt:image="!size-[50px] !rounded-md"
          pt:rotateRightButton="!hidden"
          pt:rotateLeftButton="!hidden"
          preview
        />
        <p>برای بزرگ نمایی بر روی عکس ضربه بزنید</p>
      </div>
    </div>
    <div class="flex items-center gap-2">
      <Checkbox binary pt:box="!border-[#D9D9D9]" v-model="acceptRules" />
      <p class="font-peydaBlack !text-2sm">
        ایجاد فروشگاه در سیم شاپ ، به معنای پذیرفتن قوانین و مقررات سیم شاپ است
      </p>
    </div>
    <div class="flex justify-end items-start mt-5">
      <Button label="ایجاد" pt:root="!rounded !py-2 !px-10" @click="addShop" />
    </div>
    <Toast />
  </div>
</template>

<script setup>
let shopData = reactive({
  nameshop: '',
  name: '',
  phone: '',
  phonehome: '',
  shomedec: '',
  ostan: '',
  shahr: '',
  address: '',
  img: ''
})

let { userData } = userAuth()

let { data: states } = await useFetch(
  'https://iranplacesapi.liara.run/api/provinces'
)

let cities = ref([])

let showImg = ref('')
let loading = ref(false)

let acceptRules = ref(false)

let { showToast } = useToastComp()

function setImg (file) {
  shopData.img = file
  const reader = new FileReader()
  reader.onload = e => {
    showImg.value = e.target.result
  }
  reader.readAsDataURL(file)
}

async function addShop () {
  if (
    !shopData.nameshop ||
    !shopData.name ||
    !shopData.phone ||
    !shopData.phonehome ||
    !shopData.shomedec ||
    !shopData.ostan ||
    !shopData.shahr ||
    !shopData.address ||
    !shopData.img
  ) {
    showToast('warn', 'هشدار', 'باید تمامی فیلد هارا پر و یک عکس انتخاب کنید')
  } else if (!acceptRules.value)
    showToast(
      'warn',
      'هشدار',
      'شما باید ابتدا قوانین و مقررات سیمکارت شاپ را بپذیرید'
    )
  else {
    try {
      loading.value = true
      let formData = new FormData()

      formData.append('nameshop', shopData.nameshop)
      formData.append('name', shopData.name)
      formData.append('phone', shopData.phone)
      formData.append('phonehome', shopData.phonehome)
      formData.append('shomedec', shopData.shomedec)
      formData.append('ostan', shopData.ostan.name)
      formData.append('shahr', shopData.shahr.name)
      formData.append('address', shopData.address)
      formData.append('img', shopData.img)

      let data = await $fetch('/api/shop/addShop', {
        credentials: 'include',
        method: 'POST',
        body: formData
      })

      showToast(
        'فروشگاه شما با موفقیت ساخته شد. درحال هدایت به داشبورد فروشگاه'
      )
      userData.value.isshop = 0
      setTimeout(() => {
        return navigateTo('/')
      }, 5000)
    } catch (err) {
      showToast('error', 'خطا', err.data)
    } finally {
      loading.value = false
    }
  }
}
watch(
  () => shopData.ostan,
  async newVal => {
    if (newVal?.name) {
      shopData.shahr = ''

      try {
        const data = await $fetch(
          `https://iranplacesapi.liara.run/api/provinces/name/${newVal.name}/cities`
        )
        cities.value = data
      } catch (error) {
        console.error('خطا در گرفتن شهرها:', error)
        cities.value = []
      }
    }
  },
  { immediate: true }
)
</script>

<style scoped>
* {
  font-size: 12px;
}
</style>
