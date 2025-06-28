<template>
  <div>
    <input
      type="file"
      ref="fileInput"
      class="hidden"
      id="profile"
      multiple
      accept="image/*, video/*"
      @change="handleFile"
    />
    <button
      @click="triggerFileInput"
      class="w-[45px] h-[45px] rounded-full bg-black flex-center container fixed bottom-18 right-4 z-10"
    >
      <svg
        width="13"
        height="12"
        viewBox="0 0 13 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.54439 11.8068V0.556818H7.45348V11.8068H5.54439ZM0.873935 7.13636V5.22727H12.1239V7.13636H0.873935Z"
          fill="white"
        />
      </svg>
    </button>
  </div>
</template>

<script setup>
const fileInput = ref(null)

let emit = defineEmits(['selectMedia'])

let img = ref([])
let video = ref([])

const triggerFileInput = () => {
  fileInput.value.click()
}

const handleFile = event => {
  const file = Object.entries(event.target.files)

  file.forEach(item => {
    if (item[1].type.includes('video')) video.value.push(item[1])
    else img.value.push(item[1])
  })

  emit('selectMedia', img.value, video.value)
  img.value = []
  video.value = []
}
</script>
