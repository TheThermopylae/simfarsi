<template>
  <header
    class="pb-5 pt-3 fixed w-full z-10 bg-white top-0 transition-all duration-300 conainer left-1/2 -translate-x-1/2"
    :class="{ shadow: scrolled > 50 }"
  >
    <div class="container">
      <HeaderTopSection />
      <div class="flex justify-between items-center mt-3">
        <div class="flex gap-2 items-center">
          <div class="relative">
            <NuxtImg
              src="/avatar.svg"
              alt="avatar"
              class="w-[40px] h-[40px] rounded-full"
            ></NuxtImg>
            <div
              class="w-3 h-3 primary rounded-full flex justify-center items-center absolute -bottom-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="9px"
                height="9px"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-width="2"
                  d="M12 20v-8m0 0V4m0 8h8m-8 0H4"
                />
              </svg>
            </div>
          </div>
          <NuxtLink to="/" class="primary rounded-full px-4 py-1.5 text-xs"
            >فروشگاه من</NuxtLink
          >
        </div>
        <div class="flex gap-2">
          <div class="relative flex-grow">
            <!-- <input
              @keydown.{keyAlias}.enter="searchHashtag"
              v-model="hashtagValue"
              type="text"
              id="search"

              placeholder="#هشتگ"
            /> -->
            <NuxtLink
              to="/media"
              class="bg-[#F8F8F8] rounded-full flex-center py-1.5 h-[35px] w-[160px] px-2 text-xs"
            >
              #هشتگ
            </NuxtLink>
            <button
              @click="visibleBottom = true"
              class="absolute left-0 bottom-0 bg-black w-[35px] h-[35px] rounded-full flex justify-center items-center"
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.66667 12V8H5.33333V9.33333H0V10.6667H5.33333V12H6.66667ZM12 10.6667V9.33333H8V10.6667H12ZM9.33333 8V6.66667H12V5.33333H9.33333V4H8V8H9.33333ZM6.66667 6.66667V5.33333H0V6.66667H6.66667ZM4 4V0H2.66667V1.33333H0V2.66667H2.66667V4H4ZM12 2.66667V1.33333H5.33333V2.66667H12Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
          <nuxtLink
            to="/search"
            class="w-[35px] h-[35px] bg-[#E5E7EB] flex-center rounded-full"
          >
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.6778 17L9.72778 11.05C9.25556 11.4278 8.7125 11.7269 8.09861 11.9472C7.48472 12.1676 6.83148 12.2778 6.13889 12.2778C4.42315 12.2778 2.97106 11.6836 1.78264 10.4951C0.594213 9.30671 0 7.85463 0 6.13889C0 4.42315 0.594213 2.97106 1.78264 1.78264C2.97106 0.594213 4.42315 0 6.13889 0C7.85463 0 9.30671 0.594213 10.4951 1.78264C11.6836 2.97106 12.2778 4.42315 12.2778 6.13889C12.2778 6.83148 12.1676 7.48472 11.9472 8.09861C11.7269 8.7125 11.4278 9.25556 11.05 9.72778L17 15.6778L15.6778 17ZM6.13889 10.3889C7.31944 10.3889 8.32292 9.97569 9.14931 9.14931C9.97569 8.32292 10.3889 7.31944 10.3889 6.13889C10.3889 4.95833 9.97569 3.95486 9.14931 3.12847C8.32292 2.30208 7.31944 1.88889 6.13889 1.88889C4.95833 1.88889 3.95486 2.30208 3.12847 3.12847C2.30208 3.95486 1.88889 4.95833 1.88889 6.13889C1.88889 7.31944 2.30208 8.32292 3.12847 9.14931C3.95486 9.97569 4.95833 10.3889 6.13889 10.3889Z"
                fill="black"
              />
            </svg>
          </nuxtLink>
        </div>
      </div>
    </div>
    <Drawer
      v-model:visible="visibleBottom"
      header="فیلتر"
      position="bottom"
      style="height: auto"
      :pt="{
        header: '!pt-6',
        title: '!text-[20px]',
        root: '!rounded-t-[50px]'
      }"
    >
      <template #closebutton>
        <button class="btn-c px-5 py-1">حذف فیلتر</button>
      </template>
      <div>
        <h4 class="text-gray-400 text-xs">دسته بندی ها</h4>
        <HeaderCategorySlider />
      </div>
      <div class="my-5">
        <h4 class="mb-3">رنج قیمت</h4>
        <Slider
          style="direction: ltr"
          :pt="{
            root: '!w-full',
            range: '!bg-black'
          }"
          v-model="value"
          range
          class="w-56"
          :min="0"
          :max="10000"
        />
        <div class="flex justify-between mt-2">
          <span>{{ value[1] }}$</span>
          <span>{{ value[0] }}$</span>
        </div>
      </div>
      <div class="my-5">
        <h4 class="mb-3 text-xs">جستجویی سیم مشابه</h4>
        <div class="flex gap-1 justify-center">
          <InputOtp
            pt:root="!gap-1"
            v-model="numberValue"
            :length="7"
            style="direction: ltr"
            integerOnly
          />
          <span class="border border-[#EAEAEA] py-1 px-4 rounded">0912</span>
        </div>
      </div>
      <div class="my-5">
        <label for="status" class="mb-3 block text-xs">وضعیت</label>
        <input
          type="text"
          id="status"
          class="bg-[#F4F4F4] w-full p-2 rounded"
        />
      </div>
      <div class="my-5">
        <label for="type" class="mb-3 block text-xs">نوع رند</label>
        <input type="text" id="type" class="bg-[#F4F4F4] w-full p-2 rounded" />
      </div>
      <button
        class="w-full rounded-full primary p-4 mt-7"
        @click="visibleBottom = false"
      >
        اعمال فیلترها
      </button>
    </Drawer>
  </header>
</template>

<script setup>
let route = useRoute()

let hashtagValue = ref('')

const visibleBottom = ref(false)
const value = ref([0, 200])
let numberValue = ref(null)

async function searchHashtag () {
  if (hashtagValue.value)
    await navigateTo({
      path: '/media',
      query: {
        hashtag: hashtagValue.value
      }
    })

  hashtagValue.value = ''
}

let scrolled = ref(null)

onMounted(() => {
  const handleScroll = () => {
    scrolled.value = document.documentElement.scrollTop
  }
  window.addEventListener('scroll', handleScroll)

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
})
</script>
<style scoped>
:deep(.p-inputotp-input) {
  background: #e9e9e9 !important;
  border: none !important;
  width: 35px !important;
  height: 35px !important;
}
</style>
