<template>
  <section class="flex justify-between items-ceter gap-2">
    <div class="flex gap-2 w-1/3">
      <div>
        <h4 class="text-xs font-peydaBlack">امیر برزگر ابرغانی</h4>
        <p class="text-2sm">09120142811</p>
      </div>
      <div>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 12V10H11V12H1ZM3 8H3.7L7.6 4.1125L7.2375 3.75L6.8875 3.4L3 7.3V8ZM2 9V6.875L7.6 1.2875C7.69167 1.19583 7.79792 1.125 7.91875 1.075C8.03958 1.025 8.16667 1 8.3 1C8.43333 1 8.5625 1.025 8.6875 1.075C8.8125 1.125 8.925 1.2 9.025 1.3L9.7125 2C9.8125 2.09167 9.88542 2.2 9.93125 2.325C9.97708 2.45 10 2.57917 10 2.7125C10 2.8375 9.97708 2.96042 9.93125 3.08125C9.88542 3.20208 9.8125 3.3125 9.7125 3.4125L4.125 9H2ZM7.6 4.1125L7.2375 3.75L6.8875 3.4L7.6 4.1125Z"
            fill="black"
          />
        </svg>
        <span class="relative bottom-2 text-[5px]">ویرایش</span>
      </div>
    </div>
    <Transition>
      <div
        class="bg-[#f1f1f1] rounded-[10px] p-3 relative flex-gow min-w-2/3 text-[9px]"
        v-if="showAlert"
      >
        <svg
          @click="showAlert = false"
          class="absolute left-1.5 top-3"
          width="7"
          height="7"
          viewBox="0 0 5 5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.5 5L0 4.5L2 2.5L0 0.5L0.5 0L2.5 2L4.5 0L5 0.5L3 2.5L5 4.5L4.5 5L2.5 3L0.5 5Z"
            fill="black"
          />
        </svg>
        <p class="mb-2">
          به منظور استفاده از خدمات سیم شاپ شما لازم به احراز هویت میباشد.
        </p>
        <p>اطلاعات خود را <b>تکمیل</b> کنید</p>
      </div>
    </Transition>
  </section>
</template>

<script setup>
let showAlert = ref(true)
</script>
