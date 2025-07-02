<template>
  <article
    class="flex gap-3 items-center text-2sm border-b border-gray-200 pb-3 mb-3 last:border-0"
  >
    <div class="w-1/4">
      <img
        :src="`${$config.public.API_BASE_URL}${props.item.img}`"
        :alt="'تصویر ' + props.item.title"
      />
      <div
        class="border rounded-md p-1.5 text-md flex justify-between items-center mt-2"
      >
        <svg
          @click="$emit('increase', props.item.id)"
          class="text-green-500"
          xmlns="http://www.w3.org/2000/svg"
          width="1.2em"
          height="1.2em"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 12h14m-7-7v14"
          />
        </svg>
        <span>{{ props.item.count }}</span>
        <svg
          v-if="props.item.count > 1"
          @click="$emit('decrease', props.item.id)"
          class="text-red-500"
          xmlns="http://www.w3.org/2000/svg"
          width="1.2em"
          height="1.2em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M5 12a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1"
          />
        </svg>
        <!-- @click="$emit('remove', props.item.id)" -->

        <Button
          v-else
          unstyled
          @click="visible = true"
          pt:root="!flex !items-center"
        >
          <template #icon>
            <svg
              class="text-red-500"
              xmlns="http://www.w3.org/2000/svg"
              width="1.2em"
              height="1.2em"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M14 11v6m-4-6v6M6 7v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7M4 7h16M7 7l2-4h6l2 4"
              />
            </svg>
          </template>
        </Button>
      </div>
    </div>
    <div class="w-3/4">
      <h4 class="font-peydaB text-xs">{{ props.item.title }}</h4>
      <div class="text-gray-500 mt-1 mb-2 leading-5">
        <p class="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            viewBox="0 0 24 24"
          >
            <g fill="none">
              <path
                fill="currentColor"
                d="m12 3l.295-.69a.75.75 0 0 0-.59 0zm0 18l-.372.651a.75.75 0 0 0 .744 0zm6.394-15.26l-.295.69zM8.024 18.727l-.373.652zm3.68-16.416L5.312 5.05L5.9 6.43l6.394-2.74zM4.25 6.659v6.86h1.5v-6.86zm3.401 12.72l3.977 2.272l.744-1.302l-3.977-2.273zm4.721 2.272l3.977-2.272l-.744-1.303l-3.977 2.273zm7.378-8.133V6.66h-1.5v6.86zm-1.06-8.467l-6.395-2.74l-.59 1.378l6.394 2.74zm1.06 1.608c0-.7-.417-1.332-1.06-1.608l-.591 1.379a.25.25 0 0 1 .151.23zm-3.401 12.72a6.75 6.75 0 0 0 3.401-5.86h-1.5a5.25 5.25 0 0 1-2.645 4.557zM4.25 13.519a6.75 6.75 0 0 0 3.401 5.86l.744-1.303a5.25 5.25 0 0 1-2.645-4.558zM5.31 5.05a1.75 1.75 0 0 0-1.06 1.608h1.5c0-.1.06-.19.152-.23z"
              />
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="m15 10l-4 4l-2-2"
              />
            </g>
          </svg>
          دارای گارانتی
        </p>
        <p class="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            viewBox="0 0 24 24"
          >
            <g fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M3 10v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-9" />
              <path
                stroke-miterlimit="16"
                d="M14.833 21v-6a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v6"
              />
              <path
                d="m21.818 9.364l-1.694-5.929A.6.6 0 0 0 19.547 3H15.5l.475 5.704a.58.58 0 0 0 .278.45c.39.233 1.152.663 1.747.846c1.016.313 2.5.2 3.346.096a.57.57 0 0 0 .472-.732Z"
              />
              <path
                d="M14 10c.568-.175 1.288-.574 1.69-.812a.58.58 0 0 0 .28-.549L15.5 3h-7l-.47 5.639a.58.58 0 0 0 .28.55c.402.237 1.122.636 1.69.811c1.493.46 2.507.46 4 0Z"
              />
              <path
                d="m3.876 3.435l-1.694 5.93a.57.57 0 0 0 .472.73c.845.105 2.33.217 3.346-.095c.595-.183 1.358-.613 1.747-.845a.58.58 0 0 0 .278-.451L8.5 3H4.453a.6.6 0 0 0-.577.435Z"
              />
            </g>
          </svg>
          فروشگاه امیر
        </p>
        <p class="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            viewBox="0 0 24 24"
          >
            <g fill="none">
              <path
                fill="currentColor"
                d="M2 3v-.75a.75.75 0 0 0-.75.75zm11 0h.75a.75.75 0 0 0-.75-.75zm0 6v-.75a.75.75 0 0 0-.75.75zM2 3.75h11v-1.5H2zM12.25 3v16h1.5V3zm-9.5 14V3h-1.5v14zM13 9.75h5v-1.5h-5zM21.25 13v4h1.5v-4zm-7.5 6V9h-1.5v10zm5.134.884a1.25 1.25 0 0 1-1.768 0l-1.06 1.06a2.75 2.75 0 0 0 3.889 0zm-1.768-1.768a1.25 1.25 0 0 1 1.768 0l1.06-1.06a2.75 2.75 0 0 0-3.889 0zM6.884 19.884a1.25 1.25 0 0 1-1.768 0l-1.06 1.06a2.75 2.75 0 0 0 3.889 0zm-1.768-1.768a1.25 1.25 0 0 1 1.768 0l1.06-1.06a2.75 2.75 0 0 0-3.889 0zm13.768 0c.244.244.366.563.366.884h1.5c0-.703-.269-1.408-.805-1.945zm.366.884c0 .321-.122.64-.366.884l1.06 1.06A2.74 2.74 0 0 0 20.75 19zM16 18.25h-3v1.5h3zm1.116 1.634A1.24 1.24 0 0 1 16.75 19h-1.5c0 .703.269 1.408.805 1.945zM16.75 19c0-.321.122-.64.366-.884l-1.06-1.06A2.74 2.74 0 0 0 15.25 19zm-11.634.884A1.24 1.24 0 0 1 4.75 19h-1.5c0 .703.269 1.408.805 1.945zM4.75 19c0-.321.122-.64.366-.884l-1.06-1.06A2.74 2.74 0 0 0 3.25 19zm8.25-.75H8v1.5h5zm-6.116-.134c.244.244.366.563.366.884h1.5c0-.703-.269-1.408-.805-1.945zM7.25 19c0 .321-.122.64-.366.884l1.06 1.06A2.74 2.74 0 0 0 8.75 19zm14-2c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 22.75 17zM18 9.75A3.25 3.25 0 0 1 21.25 13h1.5A4.75 4.75 0 0 0 18 8.25zM1.25 17A2.75 2.75 0 0 0 4 19.75v-1.5c-.69 0-1.25-.56-1.25-1.25z"
              />
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M2 8h3m-3 4h5"
              />
            </g>
          </svg>
          ارسال از 2 روز دیگر
        </p>
      </div>
      <span class="text-xs"
        >{{
          (props.item.price * props.item.count).toLocaleString()
        }}
        تومان</span
      >
    </div>
    <Dialog
      v-model:visible="visible"
      modal
      header="حذف از سبد خرید"
      :style="{ width: '95%' }"
    >
      <span class="text-surface-500 dark:text-surface-400 block mb-8"
        >آیا میخواهید این محصول را از سبد خرید خود حذف کنید؟</span
      >
      <div class="grid grid-cols-2 gap-2">
        <Button
          pt:root="!bg-white !border-black"
          type="button"
          label="خیر"
          severity="secondary"
          @click="visible = false"
        ></Button>
        <Button type="button" label="بله" @click="acceptRemove"></Button>
      </div>
    </Dialog>
  </article>
</template>

<script setup>
let props = defineProps(['item'])
let emit = defineEmits(['remove'])

let visible = ref(false)

function acceptRemove () {
  emit('remove', props.item.id)
  visible.value = false
}
</script>
