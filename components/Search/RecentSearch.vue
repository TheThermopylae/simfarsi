<template>
  <section class="mt-6">
    <div class="flex justify-between items-center">
      <h2 class="font-peydaB">اخیرا جستجو شده</h2>
      <button class="text-[#484CF4] text-sm">حذف</button>
    </div>
    <div class="flex flex-wrap gap-x-1 gap-y-2 mt-2">
      <button
        v-for="item in items"
        :key="items"
        @click="searchAgain(item)"
        class="text-[#7D7D7D] border border-[#E5E5E5] rounded-xl py-2 px-4 flex justify-between items-center gap-4"
      >
        {{ item }}
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 16C5.76667 16 3.875 15.225 2.325 13.675C0.775 12.125 0 10.2333 0 8C0 5.76667 0.775 3.875 2.325 2.325C3.875 0.775 5.76667 0 8 0C9.15 0 10.25 0.2375 11.3 0.7125C12.35 1.1875 13.25 1.86667 14 2.75V0H16V7H9V5H13.2C12.6667 4.06667 11.9375 3.33333 11.0125 2.8C10.0875 2.26667 9.08333 2 8 2C6.33333 2 4.91667 2.58333 3.75 3.75C2.58333 4.91667 2 6.33333 2 8C2 9.66667 2.58333 11.0833 3.75 12.25C4.91667 13.4167 6.33333 14 8 14C9.28333 14 10.4417 13.6333 11.475 12.9C12.5083 12.1667 13.2333 11.2 13.65 10H15.75C15.2833 11.7667 14.3333 13.2083 12.9 14.325C11.4667 15.4417 9.83333 16 8 16Z"
            fill="#E8EAED"
          />
        </svg>
      </button>
    </div>
  </section>
</template>

<script setup>
let route = useRoute()

let items = ref(['0912', 'خط رند', 'IPhone15', 'IPhone15 pro', 'کد یک'])

function searchAgain (item) {
  return navigateTo({
    path: '/search',
    query: {
      ...route.query,
      search: item
    }
  })
}
</script>
