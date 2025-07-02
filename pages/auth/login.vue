<template>
  <main>
    <Toast />
    <AuthBackSection>ورود به حساب</AuthBackSection>
    <div class="container">
      <AuthInsertPhoneLog
        @showOtpEmit="showOtpFunc"
        v-if="!showOtp"
      ></AuthInsertPhoneLog>
      <AuthInsertOtp :phone="phone" v-else></AuthInsertOtp>
    </div>
  </main>
</template>

<script setup>
const toast = useToast()

useHead({
  title: 'ورود به حساب کاربری'
})

let phone = ref('')

definePageMeta({
  layout: false,
  middleware: 'logged-in'
})

let showOtp = ref(false)

function showOtpFunc (item) {
  phone.value = item

  toast.add({
    severity: 'success',
    summary: 'موفقیت آمیز',
    detail: 'کد پیامک شده را وارد کنید',
    life: 5000
  })

  showOtp.value = true
}
</script>
