<template>
  <div>
    <input
      type="file"
      ref="fileInput"
      class="hidden"
      @change="handleFile"
      accept="image/*"
    />
    <button
      @click="triggerFileInput"
      class="font-peydaB my-3 border-2 border-dashed w-full h-[130px] bg-white flex justify-center items-center flex-col border-black p-10 gap-1 rounded-2xl text-xs"
    >
      افزودن عکس
    </button>
  </div>
</template>

<script setup>
const fileInput = ref(null)

let emit = defineEmits(['selectedFile'])

const triggerFileInput = () => {
  fileInput.value.click()
}

const handleFile = event => {
  const file = event.target.files[0]
  emit('selectedFile', file)
}
</script>
