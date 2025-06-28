<template>
  <div>
    <input
      type="file"
      ref="fileInput"
      class="hidden"
      id="profile"
      @change="handleFile"
    />
    <div class="text-cente" @click="triggerFileInput">
      <div class="flex-center w-[52px] h-[52px] rounded-full bg-black mb-2">
        <svg
          width="15"
          height="16"
          viewBox="0 0 15 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.08452 15.1875V0.357954H7.9027V15.1875H7.08452ZM0.0788354 8.18182V7.36364H14.9084V8.18182H0.0788354Z"
            fill="white"
          />
        </svg>
      </div>
      افزودن استوری
    </div>
  </div>
</template>

<script setup>
const fileInput = ref(null)

const triggerFileInput = () => {
  fileInput.value.click()
}

const handleFile = event => {
  const file = event.target.files[0]
  console.log('فایلی که انتخاب شد:', file)
}
</script>
