<template>
  <div class="flex justify-between items-center">
    <h3 class="font-peydaB text-2sm" @click="backPage">بازگشت</h3>
    <svg
      @click="backPage"
      width="6"
      height="10"
      viewBox="0 0 6 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.09554 10L0 5L5.09554 0L6 0.8875L1.80892 5L6 9.1125L5.09554 10Z"
        fill="#A0A0A0"
      />
    </svg>
  </div>
</template>

<script setup>
function backPage () {
  history.back()
}
</script>
