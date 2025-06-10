<template>
  <main class="container">
    <div class="mb-4">
      <label for="number" class="font-peydaB text-xs"> دسته بندی</label>
      <Select
        v-model="simData.Operator"
        :options="category.categorys"
        optionLabel="title"
        placeholder="دسته بندی مرتبط با آگهی خود را انتخاب کنید"
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
      <label class="font-peydaB text-xs">عکس آگهی</label>
      <UserDashboardUploadPic></UserDashboardUploadPic>
      <p class="text-red-500 text-2sm">افزودن حداقل 1 عکس الزامیست</p>
    </div>
    <div class="mb-4">
      <label for="title" class="font-peydaB text-xs">عنوان آگهی</label>
      <div class="relative">
        <input
          v-model="simData.title"
          type="text"
          id="title"
          class="bg-[#F8F8F8] rounded-2xl p-5 block w-full mt-3 placeholder:text-xs placeholder:text-black text-xs"
          placeholder="عنوان آگهی خود را بنویسید"
        />
        <svg
          class="absolute left-5 top-1/2 -translate-y-1/2"
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12.5" cy="12.5" r="12.5" fill="black" />
          <path
            d="M12.5 13.75C11.9792 13.75 11.5365 13.5677 11.1719 13.2031C10.8073 12.8385 10.625 12.3958 10.625 11.875V8.125C10.625 7.60417 10.8073 7.16146 11.1719 6.79688C11.5365 6.43229 11.9792 6.25 12.5 6.25C13.0208 6.25 13.4635 6.43229 13.8281 6.79688C14.1927 7.16146 14.375 7.60417 14.375 8.125V11.875C14.375 12.3958 14.1927 12.8385 13.8281 13.2031C13.4635 13.5677 13.0208 13.75 12.5 13.75ZM11.875 18.125V16.2031C10.7917 16.0573 9.89583 15.5729 9.1875 14.75C8.47917 13.9271 8.125 12.9688 8.125 11.875H9.375C9.375 12.7396 9.67969 13.4766 10.2891 14.0859C10.8984 14.6953 11.6354 15 12.5 15C13.3646 15 14.1016 14.6953 14.7109 14.0859C15.3203 13.4766 15.625 12.7396 15.625 11.875H16.875C16.875 12.9688 16.5208 13.9271 15.8125 14.75C15.1042 15.5729 14.2083 16.0573 13.125 16.2031V18.125H11.875ZM12.5 12.5C12.6771 12.5 12.8255 12.4401 12.9453 12.3203C13.0651 12.2005 13.125 12.0521 13.125 11.875V8.125C13.125 7.94792 13.0651 7.79948 12.9453 7.67969C12.8255 7.5599 12.6771 7.5 12.5 7.5C12.3229 7.5 12.1745 7.5599 12.0547 7.67969C11.9349 7.79948 11.875 7.94792 11.875 8.125V11.875C11.875 12.0521 11.9349 12.2005 12.0547 12.3203C12.1745 12.4401 12.3229 12.5 12.5 12.5Z"
            fill="#E8EAED"
          />
        </svg>
      </div>
    </div>
    <div class="mb-4">
      <label for="des" class="font-peydaB text-xs">توضیحات آگهی</label>
      <div class="relative">
        <textarea
          v-model="simData.dec"
          id="des"
          class="bg-[#F8F8F8] rounded-2xl p-5 block w-full mt-3 placeholder:text-xs placeholder:text-black text-xs resize-none"
          placeholder="عنوان آگهی خود را بنویسید"
          rows="8"
        ></textarea>
        <svg
          class="absolute left-5 top-5"
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12.5" cy="12.5" r="12.5" fill="black" />
          <path
            d="M12.5 13.75C11.9792 13.75 11.5365 13.5677 11.1719 13.2031C10.8073 12.8385 10.625 12.3958 10.625 11.875V8.125C10.625 7.60417 10.8073 7.16146 11.1719 6.79688C11.5365 6.43229 11.9792 6.25 12.5 6.25C13.0208 6.25 13.4635 6.43229 13.8281 6.79688C14.1927 7.16146 14.375 7.60417 14.375 8.125V11.875C14.375 12.3958 14.1927 12.8385 13.8281 13.2031C13.4635 13.5677 13.0208 13.75 12.5 13.75ZM11.875 18.125V16.2031C10.7917 16.0573 9.89583 15.5729 9.1875 14.75C8.47917 13.9271 8.125 12.9688 8.125 11.875H9.375C9.375 12.7396 9.67969 13.4766 10.2891 14.0859C10.8984 14.6953 11.6354 15 12.5 15C13.3646 15 14.1016 14.6953 14.7109 14.0859C15.3203 13.4766 15.625 12.7396 15.625 11.875H16.875C16.875 12.9688 16.5208 13.9271 15.8125 14.75C15.1042 15.5729 14.2083 16.0573 13.125 16.2031V18.125H11.875ZM12.5 12.5C12.6771 12.5 12.8255 12.4401 12.9453 12.3203C13.0651 12.2005 13.125 12.0521 13.125 11.875V8.125C13.125 7.94792 13.0651 7.79948 12.9453 7.67969C12.8255 7.5599 12.6771 7.5 12.5 7.5C12.3229 7.5 12.1745 7.5599 12.0547 7.67969C11.9349 7.79948 11.875 7.94792 11.875 8.125V11.875C11.875 12.0521 11.9349 12.2005 12.0547 12.3203C12.1745 12.4401 12.3229 12.5 12.5 12.5Z"
            fill="#E8EAED"
          />
        </svg>
      </div>
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

let { data: category } = await useFetch('/api/admin/categories/getCategory', {
  credentials: 'include'
})

let operators = ref(['ایرانسل', 'رایتل', 'همراه اول'])
let simData = reactive({
  title: '',
  dec: '',
  price: '',
  category: '684208e156d31f8593bea7cf',
  phone: '',
  ad_type: '',
  simstatus: '',
  sale: '',
  Operator: '',
  Numbertype: '',
  img: ''
})

async function addUserAd () {
  let data = await $fetch('/api/ad/addUserAd', {
    credentials: 'include',
    method: 'POST',
    body: simData
  })
}
</script>
