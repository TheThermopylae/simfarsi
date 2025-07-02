<template>
  <main class="flex justify-center flex-col items-center container">
    <section class="w-full" v-if="route.query.status == 'success'">
      <div class="flex justify-center">
        <div
          class="flex-center size-[50px] border-2 border-green-500 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 24 24"
            class="text-green-500"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M5 14.5s1.5 0 3.5 3.5c0 0 5.559-9.167 10.5-11"
              color="currentColor"
            />
          </svg>
        </div>
      </div>
      <p class="text-2sm text-center text-green-500 my-2">
        خرید شما موفقیت آمیز بود، منتظر پردازش سفارش خود باشید.
      </p>
      <NuxtLink
        to="/"
        class="text-2sm primary block w-full text-center p-2 rounded-md"
        >مشاهده سفارشات من</NuxtLink
      >
    </section>
    <section class="w-full" v-else-if="route.query.status == 'failed'">
      <div class="flex justify-center">
        <div
          class="flex flex-center size-[50px] border-2 border-red-500 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 24 24"
            class="text-red-500"
          >
            <path
              fill="currentColor"
              d="M6.225 4.811a1 1 0 0 0-1.414 1.414L10.586 12L4.81 17.775a1 1 0 1 0 1.414 1.414L12 13.414l5.775 5.775a1 1 0 0 0 1.414-1.414L13.414 12l5.775-5.775a1 1 0 0 0-1.414-1.414L12 10.586z"
            />
          </svg>
        </div>
      </div>
      <p class="text-2sm text-center text-red-500 my-2">
        خرید شما به مشکل خورد. دوباره امتحان کنید.
      </p>
      <NuxtLink
        to="/"
        class="text-2sm primary block w-full text-center p-2 rounded-md"
        >مشاهده سفارشات من</NuxtLink
      >
    </section>
  </main>
</template>

<script setup>
let route = useRoute()
</script>
