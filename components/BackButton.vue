<template>
  <button class="flex items-center gap-2 text-sm font-peydaBlack" @click="goBack">
    <div class="w-5 h-5 bg-black rounded-full flex justify-center items-center">
      <svg
        width="6"
        height="11"
        viewBox="0 0 6 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.904459 11L6 5.5L0.904459 0L0 0.97625L4.19108 5.5L0 10.0238L0.904459 11Z"
          fill="white"
        />
      </svg>
    </div>
    بازگشت
  </button>
</template>

<script setup>
function goBack () {
  history.back()
}
</script>
