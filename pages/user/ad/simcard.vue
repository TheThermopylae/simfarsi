<template>
  <main class="container">
    <div class="mb-4">
      <label for="number" class="font-peydaB text-xs">ثبت آگهی سیم کارت</label>
      <input
        v-model="simData.phone"
        type="number"
        id="number"
        class="bg-[#F8F8F8] rounded-2xl p-5 block w-full mt-3 placeholder:text-xs placeholder:text-black text-xs"
        placeholder="شماره سیم کارت را وارد کنید"
      />
    </div>
    <div class="mb-4">
      <label class="font-peydaB text-xs">اوپراتور</label>
      <Select
        v-model="simData.Operator"
        :options="operators"
        placeholder="اوپراتور سیم کارت را وارد کنید"
        class="w-full"
        :pt="{
          option: ({ context }) => ({
            class: context.selected ? '!bg-black !text-white' : ''
          }),
          root: '!p-5 !bg-[#F8F8F8] !text-xs !rounded-2xl !mt-3',
          label: '!p-0',
          dropdownIcon: '!hidden'
        }"
      />
    </div>
    <div class="mb-4">
      <label for="title" class="font-peydaB text-xs">عنوان آگهی</label>
      <input
        v-model="simData.title"
        type="text"
        id="title"
        class="bg-[#F8F8F8] rounded-2xl p-5 block w-full mt-3 placeholder:text-xs placeholder:text-black text-xs"
        placeholder="عنوان آگهی خود را بنویسید"
      />
    </div>
    <div class="mb-4">
      <label for="des" class="font-peydaB text-xs">توضیحات آگهی</label>
      <textarea
        v-model="simData.dec"
        id="des"
        class="bg-[#F8F8F8] rounded-2xl p-5 block w-full mt-3 placeholder:text-xs placeholder:text-black text-xs resize-none"
        placeholder="عنوان آگهی خود را بنویسید"
        rows="8"
      ></textarea>
    </div>
    <div class="mb-4">
      <label for="status" class="font-peydaB text-xs">وضعیت سیمکارت </label>
      <input
        v-model="simData.status"
        type="text"
        id="status"
        class="bg-[#F8F8F8] rounded-2xl p-5 block w-full mt-3 placeholder:text-xs placeholder:text-black text-xs"
        placeholder="وضعیت سیم کارت را مشخص کنید"
      />
    </div>
    <div class="flex justify-end">
      <button class="btn-c rounded py-2 px-10 mb-20" @click="addUserAd">
        بعدی
      </button>
    </div>
  </main>
</template>

<script setup>
useHead({
  title: '| افزودن آگهی سیمکارت'
})

let operators = ref(['ایرانسل', 'رایتل', 'همراه اول'])
let simData = reactive({
  title: "",
  dec: "",
  price: "",
  category: '684208e156d31f8593bea7cf',
  phone: "",
  ad_type: "",
  simstatus: "",
  sale: "",
  Operator: "",
  Numbertype: "",
  img: ""
})

async function addUserAd () {
  let data = await $fetch('/api/ad/addUserAd', {
    credentials: 'include',
    method: 'POST',
    body: simData
  })

  console.log(data);
  
}
</script>
