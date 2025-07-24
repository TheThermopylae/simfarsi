<template>
  <section class="mt-7">
    <p class="font-peydaB">فرم ثبت نام را پر کنید</p>
    <p class="my-8 text-[12px]">
      برای استفاده از امکانات <strong>سیم کارت شاپ</strong>، باید یک حساب
      بزارید. کد تایید به شماره موبایل شما پیامک خواهد شد
    </p>
    <NuxtImg
      src="/auth/forget.svg"
      alt="insert-phone"
      class="w-2/3 block m-auto"
    ></NuxtImg>
    <form @submit.prevent="sendPhone">
      <InputText
        type="number"
        v-model="regData.phone"
        placeholder="شماره موبایل"
        class="border !border-[#6E6D6D] rounded w-full mt-10 mb-3 !p-2.5 placeholder:text-[12px] text-left placeholder:text-right"
      />
      <InputText
        type="number"
        v-model="regData.codemeli"
        placeholder="کد ملی"
        class="border !border-[#6E6D6D] rounded w-full mb-3 !p-2.5 placeholder:text-[12px] text-left placeholder:text-right"
      />
      <InputText
        type="text"
        v-model="regData.username"
        placeholder="نام کاربری"
        class="border !border-[#6E6D6D] rounded w-full mb-3 !p-2.5 placeholder:text-[12px] text-left placeholder:text-right"
      />
      <button class="bg-black text-white rounded w-full p-2 text-xs">
        ورود به سیم شاپ
      </button>
      <NuxtLink class="mt-3 text-xs block" to="/auth/login"
        >حساب دارید؟ وارد شوید</NuxtLink
      >
    </form>
    <p class="text-center text-[10px] mt-10">
      <NuxtLink to="/" class="font-peydaB">شرایط و قوانین استفاده</NuxtLink>
      و
      <NuxtLink to="/" class="font-peydaB">سیاست نامه حریم خصوصی</NuxtLink>
      سیم شاپ را میپذیرم
    </p>
    <Toast />
  </section>
</template>

<script setup>
const toast = useToast()
let config = useRuntimeConfig()

let emit = defineEmits(['showOtpEmit'])

let regData = reactive({
  phone: '',
  codemeli: '',
  username: ''
})

async function sendPhone () {
  try {
    if (!regData.phone || !regData.codemeli || !regData.username) {
      toast.add({
        severity: 'warn',
        summary: 'هشدار',
        detail: 'برای ساخت حساب باید تمامی فیلد ها را پر کنید!',
        life: 5000
      })
    } else {
      let data = await $fetch(`${config.public.API_BASE_URL}/auth/register`, {
        method: 'POST',
        body: {
          phone: regData.phone,
          codemeli: regData.codemeli,
          username: regData.username
        }
      })

      emit('showOtpEmit', regData.phone)
    }
  } catch (err) {
    toast.add({
      severity: 'error',
      summary: 'خطا',
      detail: err,
      life: 5000
    })
  }
}
</script>
