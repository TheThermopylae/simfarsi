<template>
  <section class="mt-7">
    <p class="font-peydaB">شماره موبایل خود را وارد کنید</p>
    <p class="my-8 text-[12px]">
      برای استفاده از امکانات <strong>سیم کارت شاپ</strong>، لطفا شماره موبایل
      خود را وارد کنید. کد تایید به این شماره پیامک خواهد شد.
    </p>
    <NuxtImg
      src="/auth/forget.svg"
      alt="insert-phone"
      class="w-2/3 block m-auto"
    ></NuxtImg>
    <input
      type="number"
      id="phone-number"
      placeholder="شماره موبایل"
      class="border border-[#6E6D6D] rounded w-full mt-20 mb-10 p-2.5 placeholder:text-[12px] text-left placeholder:text-right"
    />
    <button @click="$emit('showOtpEmit')" class="bg-black text-white rounded w-full p-2 text-xs">
      ورود به سیم شاپ
    </button>
    <p class="text-center text-[10px] mt-10">
      <NuxtLink to="/" class="font-peydaB">شرایط و قوانین استفاده</NuxtLink>
      و
      <NuxtLink to="/" class="font-peydaB">سیاست نامه حریم خصوصی</NuxtLink>
      سیم شاپ را میپذیرم
    </p>
  </section>
</template>
