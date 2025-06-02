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
    <form @submit.prevent="sendOtp">
      <div class="flex justify-center mb-9">
        <InputOtp v-model="otp" :length="5" style="direction: ltr" />
      </div>
      <button class="bg-black text-white rounded w-full p-2 text-xs">
        ورود به سیم شاپ
      </button>
    </form>
    <p class="text-center text-[10px] mt-10">
      <NuxtLink to="/" class="font-peydaB">شرایط و قوانین استفاده</NuxtLink>
      و
      <NuxtLink to="/" class="font-peydaB">سیاست نامه حریم خصوصی</NuxtLink>
      سیم شاپ را میپذیرم
    </p>
  </section>
  <Toast />
</template>

<script setup>
const toast = useToast()

let props = defineProps(['phone'])
let otp = ref('')

async function sendOtp () {
  try {
    let data = await $fetch('/api/auth/otp', {
      method: 'POST',
      body: { phone: '09905457180', otp: otp.value }
    })

    toast.add({
      severity: 'success',
      summary: 'موفقیت آمیز',
      detail: 'ثبت نام شما با موفقیت انجام شد',
      life: 5000
    })
  } catch (err) {
    console.log(err)
  }
}
</script>

<style>
:deep(.p-inputotp-input) {
  border: none !important;
  background: #f1f1f1 !important;
  box-shadow: 0 4px 4px #00000025 !important;
}
</style>
