<template>
  <section class="mt-7">
    <p class="font-peydaB">کد تایید را وارد کنید</p>
    <p class="my-8 text-xs text-center">
      لطفا کد تاییدی را که به شماره {{ props.phone }} پیامک شده را وارد کنید
    </p>
    <NuxtImg
      src="/auth/otp.svg"
      alt="insert-phone"
      class="w-2/3 block m-auto"
    ></NuxtImg>
    <p class="text-center my-8 text-2sm">درخواست مجدد (00:30)</p>
    <form @submit.prevent="sendOtp">
      <div class="flex justify-center mb-9">
        <InputOtp
          v-model="otp"
          :length="5"
          style="direction: ltr"
          integer-only
        />
      </div>
      <button
        v-if="!loading"
        class="bg-black text-white rounded w-full p-2 text-xs h-8 flex.center"
      >
        ورود به سیم شاپ
      </button>
      <button
        v-else
        disabled
        class="bg-black text-white rounded w-full p-2 text-xs h-8 flex-center"
      >
        <LoadingSpinner class="w-3"></LoadingSpinner>
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

let { userData } = userAuth()

let props = defineProps(['phone'])
let otp = ref('')

let loading = ref(false)

async function sendOtp () {
  try {
    loading.value = true

    let data = await $fetch('/api/auth/otp', {
      method: 'POST',
      body: { phone: '09905457180', otp: otp.value }
    })

    toast.add({
      severity: 'success',
      summary: 'موفقیت آمیز',
      detail: ' ثبت نام شما با موفقیت انجام شد. در حال هدایت به صفحه ی اصلی',
      life: 5000
    })

    userData.value = data.user
    setTimeout(() => {
      return navigateTo('/')
    }, 5000)
  } catch (err) {
    console.log(err)
  }
}
</script>

<style scoped>
:deep(.p-inputotp-input) {
  border: none !important;
  background: #f1f1f1 !important;
  box-shadow: 0 4px 4px #00000025 !important;
}
</style>
