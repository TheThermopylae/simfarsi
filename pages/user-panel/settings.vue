<template>
  <div>
    <BackButton class="container" />
    <section class="primary py-3 my-3 text-2sm">
      <div class="container">
        <p class="leading-[200%]">
          شما با شماره موبایل {{ userData.phone }} وارد شده اید و آگهی های ثبت
          شده با این شماره را مشاهده میکنید.
        </p>
        <div class="flex justify-end">
          <Button
            :loading="loading"
            label="خروج از حساب کاربری"
            @click="logoutFunc"
            pt:root="!bg-white !text-black !rounded-[10px] !p-2 !text-2sm"
          />
        </div>
      </div>
    </section>
    <ul class="container px-8">
      <li class="border-b border-gray-300 mb-4">
        <NuxtLink
          to="/user-panel/user-account"
          class="flex justify-between items-center pb-4"
        >
          حساب کاربری
          <svg
            width="10"
            height="18"
            viewBox="0 0 10 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.35812 17.4135C8.47947 17.5348 8.63116 17.5955 8.79801 17.5955C8.96486 17.5955 9.11655 17.5348 9.2379 17.4135C9.4806 17.1708 9.4806 16.7764 9.2379 16.5337L1.50195 8.79774L9.2379 1.0618C9.4806 0.8191 9.4806 0.424719 9.2379 0.182022C8.9952 -0.0606741 8.60082 -0.0606741 8.35813 0.182022L0.182287 8.35786C-0.0604076 8.60055 -0.0604076 8.99494 0.182287 9.23763L8.35812 17.4135Z"
              fill="black"
            />
          </svg>
        </NuxtLink>
      </li>
      <li class="border-b border-gray-300 mb-4">
        <NuxtLink to="/" class="flex justify-between items-center pb-4">
          آدرس
          <svg
            width="10"
            height="18"
            viewBox="0 0 10 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.35812 17.4135C8.47947 17.5348 8.63116 17.5955 8.79801 17.5955C8.96486 17.5955 9.11655 17.5348 9.2379 17.4135C9.4806 17.1708 9.4806 16.7764 9.2379 16.5337L1.50195 8.79774L9.2379 1.0618C9.4806 0.8191 9.4806 0.424719 9.2379 0.182022C8.9952 -0.0606741 8.60082 -0.0606741 8.35813 0.182022L0.182287 8.35786C-0.0604076 8.60055 -0.0604076 8.99494 0.182287 9.23763L8.35812 17.4135Z"
              fill="black"
            />
          </svg>
        </NuxtLink>
      </li>
      <li class="border-b border-gray-300 mb-4">
        <NuxtLink to="/" class="flex justify-between items-center pb-4">
          حساب کاربری
          <svg
            width="10"
            height="18"
            viewBox="0 0 10 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.35812 17.4135C8.47947 17.5348 8.63116 17.5955 8.79801 17.5955C8.96486 17.5955 9.11655 17.5348 9.2379 17.4135C9.4806 17.1708 9.4806 16.7764 9.2379 16.5337L1.50195 8.79774L9.2379 1.0618C9.4806 0.8191 9.4806 0.424719 9.2379 0.182022C8.9952 -0.0606741 8.60082 -0.0606741 8.35813 0.182022L0.182287 8.35786C-0.0604076 8.60055 -0.0604076 8.99494 0.182287 9.23763L8.35812 17.4135Z"
              fill="black"
            />
          </svg>
        </NuxtLink>
      </li>
      <li class="border-b border-gray-300 mb-4">
        <NuxtLink to="/" class="flex justify-between items-center pb-4">
          آدرس
          <svg
            width="10"
            height="18"
            viewBox="0 0 10 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.35812 17.4135C8.47947 17.5348 8.63116 17.5955 8.79801 17.5955C8.96486 17.5955 9.11655 17.5348 9.2379 17.4135C9.4806 17.1708 9.4806 16.7764 9.2379 16.5337L1.50195 8.79774L9.2379 1.0618C9.4806 0.8191 9.4806 0.424719 9.2379 0.182022C8.9952 -0.0606741 8.60082 -0.0606741 8.35813 0.182022L0.182287 8.35786C-0.0604076 8.60055 -0.0604076 8.99494 0.182287 9.23763L8.35812 17.4135Z"
              fill="black"
            />
          </svg>
        </NuxtLink>
      </li>
      <li class="border-b border-gray-300 mb-4">
        <NuxtLink to="/" class="flex justify-between items-center pb-4">
          حساب کاربری
          <svg
            width="10"
            height="18"
            viewBox="0 0 10 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.35812 17.4135C8.47947 17.5348 8.63116 17.5955 8.79801 17.5955C8.96486 17.5955 9.11655 17.5348 9.2379 17.4135C9.4806 17.1708 9.4806 16.7764 9.2379 16.5337L1.50195 8.79774L9.2379 1.0618C9.4806 0.8191 9.4806 0.424719 9.2379 0.182022C8.9952 -0.0606741 8.60082 -0.0606741 8.35813 0.182022L0.182287 8.35786C-0.0604076 8.60055 -0.0604076 8.99494 0.182287 9.23763L8.35812 17.4135Z"
              fill="black"
            />
          </svg>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/" class="flex justify-between items-center pb-4">
          آدرس
          <svg
            width="10"
            height="18"
            viewBox="0 0 10 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.35812 17.4135C8.47947 17.5348 8.63116 17.5955 8.79801 17.5955C8.96486 17.5955 9.11655 17.5348 9.2379 17.4135C9.4806 17.1708 9.4806 16.7764 9.2379 16.5337L1.50195 8.79774L9.2379 1.0618C9.4806 0.8191 9.4806 0.424719 9.2379 0.182022C8.9952 -0.0606741 8.60082 -0.0606741 8.35813 0.182022L0.182287 8.35786C-0.0604076 8.60055 -0.0604076 8.99494 0.182287 9.23763L8.35812 17.4135Z"
              fill="black"
            />
          </svg>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>


useHead({
  title: '| تنظیمات'
})

let { userData } = userAuth()
let { showToast } = useToastComp()

let loading = ref(false)
async function logoutFunc () {
  loading.value = true
  try {
    let data = await $fetch('/api/auth/logout', {
      credentials: 'include'
    })

    userData.value = null
    return navigateTo('/')
  } catch (error) {
    showToast(
      'error',
      'خطا',
      'خطایی در خروج از حساب کاربری رخ داد. لطفا دوباره تلاش کنید.'
    )
  } finally {
    loading.value = false
  }
}
</script>
