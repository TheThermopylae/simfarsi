<template>
  <section class="container fixed left-1/2 -translate-x-1/2 bottom-3 z-10">
    <div class="bg-[#F4F4F4] p-3 rounded-full shadow flex justify-between">
      <NuxtLink
        active-class="text-black"
        to="/auth"
        class="text-[#767676] text-[10px] flex flex-col items-center gap-1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="13px"
          height="13px"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M19.523 21.99H4.488c-1.503 0-2.663-1.134-2.466-2.624l.114-.869c.207-1.2 1.305-1.955 2.497-2.214L11.928 15h.144l7.295 1.283c1.212.28 2.29.993 2.497 2.214l.114.88c.197 1.49-.963 2.623-2.466 2.623zM17 7A5 5 0 1 1 7 7a5 5 0 0 1 10 0"
          />
        </svg>
        حساب کاربری
      </NuxtLink>
      <NuxtLink
        active-class="text-black"
        to="/admin-panel/users"
        class="text-[#767676] text-[10px] flex flex-col items-center gap-1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="13px"
          height="13px"
          viewBox="0 0 20 20"
        >
          <path
            fill="currentColor"
            d="M5.845 4C5.364 4 5 4.374 5 4.804V6H4V4.804C4 3.794 4.84 3 5.845 3h10.31C17.16 3 18 3.794 18 4.804v7.392c0 1.01-.84 1.804-1.845 1.804H10v-1h6.155c.481 0 .845-.374.845-.804V4.804c0-.43-.364-.804-.845-.804zM10 12h2.5a.5.5 0 0 0 0-1H10zm-5 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zM2 8.5A1.5 1.5 0 0 1 3.5 7h4A1.5 1.5 0 0 1 9 8.5v8A1.5 1.5 0 0 1 7.5 18h-4A1.5 1.5 0 0 1 2 16.5zM3.5 8a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5z"
          />
        </svg>
       کالای دیجیتال
      </NuxtLink>
      <NuxtLink
        to="/"
        class="text-[#767676] text-[10px] flex flex-col items-center gap-1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="13px"
          height="13px"
          viewBox="0 0 24 24"
        >
          <g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
            <path
              d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m10-8a8 8 0 1 0 0 16a8 8 0 0 0 0-16"
            />
            <path
              d="M13 7a1 1 0 1 0-2 0v4H7a1 1 0 1 0 0 2h4v4a1 1 0 1 0 2 0v-4h4a1 1 0 1 0 0-2h-4z"
            />
          </g>
        </svg>
        ثبت آگهی
      </NuxtLink>
      <NuxtLink
        to="/"
        class="text-[#767676] text-[10px] flex flex-col items-center gap-1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="13px"
          height="13px"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M18 4v16H6V8.8L10.8 4zm0-2h-8L4 8v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2M9.5 19h-2v-2h2zm7 0h-2v-2h2zm-7-4h-2v-4h2zm3.5 4h-2v-4h2zm0-6h-2v-2h2zm3.5 2h-2v-4h2z"
          />
        </svg>
        سیم کارت
      </NuxtLink>
      <NuxtLink
        to="/"
        class="text-[#767676] text-[10px] flex flex-col items-center gap-1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="13px"
          height="13px"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M6 19h3v-6h6v6h3v-9l-6-4.5L6 10zm-2 2V9l8-6l8 6v12h-7v-6h-2v6zm8-8.75"
          />
        </svg>
        آگهی ها
      </NuxtLink>
    </div>
  </section>
</template>
