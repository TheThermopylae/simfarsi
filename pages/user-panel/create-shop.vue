<template>
  <div class="container">
    <div class="mb-5">
      <h1>ایجاد فروشگاه من</h1>
      <p>برای فعالیت حرفه ای در سیم شاپ باید کسب وکار خود را ثبت کنید.</p>
    </div>
    <div class="mb-5">
      <h2>نام کسب و کار</h2>
      <p class="mt-1">کسب و کار شما با این نام نمایش داده می شود</p>
      <input
        type="text"
        class="rounded-2xl bg-[#F8F8F8] p-5 w-full mt-4"
        placeholder="مثال : فروشگاه افشار"
      />
    </div>
    <div>
      <label for="type" class="font-peydaBlack">نوع کسب و کار</label>
      <input
        type="text"
        class="rounded-2xl bg-[#F8F8F8] p-5 w-full mt-4"
        placeholder="کسب و کار شما چیست"
      />
    </div>
    <div class="my-5">
      <label for="des" class="font-peydaBlack">توضیحات آگهی</label>
      <div class="relative">
        <textarea
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
    <div class="flex items-center gap-1">
      <Checkbox binary pt:box="!border-[#D9D9D9]" />
      <p class="font-peydaBlack !text-2sm">
        ایجاد فروشگاه در سیم شاپ ، به معنای پذیرفتن قوانین و مقررات سیم شاپ است
      </p>
    </div>
    <div class="flex justify-end items-start mt-5">
      <button class="btn-c rounded py-2 px-10" @click="">ایجاد</button>
    </div>
  </div>
</template>

<style scoped>
* {
  font-size: 12px;
}
</style>
