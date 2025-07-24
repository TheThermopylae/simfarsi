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
    <form @submit.prevent="sendPhone">
      <InputText
        type="number"
        v-model="phone"
        placeholder="شماره موبایل"
        class="border !border-[#6E6D6D] rounded w-full mt-20 mb-10 !p-2.5 placeholder:text-[12px] text-left placeholder:text-right"
      />
      <button
        v-if="!loading"
        class="bg-black text-white rounded w-full p-2 text-xs"
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
      <NuxtLink class="mt-3 text-xs block" to="/auth/register"
        >حساب ندارید؟ یکی بسازید
      </NuxtLink>
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

let phone = ref('')

let loading = ref(false)

async function sendPhone () {
  try {
    if (!phone.value) {
      toast.add({
        severity: 'error',
        summary: 'خطا',
        detail: 'لطفا شماره موبایل خود را وارد کنید',
        life: 5000
      })
    } else {
      loading.value = true

      let data = await $fetch(`${config.public.API_BASE_URL}/auth/login`, {
        method: 'POST',
        body: {
          phone: phone.value
        }
      })

      emit('showOtpEmit', phone.value)
    }
  } catch (err) {
    toast.add({
      severity: 'error',
      summary: 'خطا',
      detail: err,
      life: 5000
    })
  } finally {
    loading.value = false
  }
}
</script>
