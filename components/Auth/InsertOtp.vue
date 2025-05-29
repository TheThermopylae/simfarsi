<template>
  <section class="mt-7">
    <p class="font-peydaB">کد تایید را وارد کنید</p>
    <p class="my-8 text-xs text-center">
      لطفا کد تاییدی را که به شماره 09120142811 پیامک شده را وارد کنید
    </p>
    <NuxtImg
      src="/auth/otp.svg"
      alt="insert-phone"
      class="w-2/3 block m-auto"
    ></NuxtImg>
    <p class="text-center my-8 text-2sm">درخواست مجدد (00:30)</p>
    <div class="flex justify-center mb-9">
      <InputOtp v-model="value" :length="6" style="direction: ltr;" />
    </div>
    <button class="bg-black text-white rounded w-full p-2 text-xs">
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

<script setup>
let value = ref('')
</script>

<style>
.p-inputotp-input {
  /* background: ; */
  border: none;
  background: #f1f1f1;
  box-shadow: 0 4px 4px #00000025;
}
.p-inputotp-input:focus {
  background: red !;
}
</style>
