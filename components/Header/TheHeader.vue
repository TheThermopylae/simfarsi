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
            <input
              v-if="route.path != '/search'"
              @keydown.{keyAlias}.enter="searchProduct"
              v-model="searchValue"
              type="text"
              id="search"
              class="bg-[#F8F8F8] rounded-full placeholder:text-center py-1.5 h-[35px] w-full px-2 text-xs"
              placeholder="جستجو"
            />
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
            to="/"
            class="w-[35px] h-[35px] bg-[#E5E7EB] flex justify-center items-center rounded-full"
          >
            <svg
              width="17"
              height="15"
              viewBox="0 0 17 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.7818 0H1.69091C0.763636 0 0 0.763636 0 1.69091V10.6364C0 11.5636 0.763636 12.3273 1.69091 12.3273H5.67273L7.55454 14.6182C7.71818 14.8909 7.96364 15 8.23636 15C8.50909 15 8.75455 14.8909 8.91818 14.6727L10.8 12.3818H14.7818C15.7091 12.3818 16.4727 11.6182 16.4727 10.6909V1.71818C16.4727 0.763636 15.7091 0 14.7818 0ZM15.2727 10.6636C15.2727 10.9364 15.0545 11.1545 14.7818 11.1545H10.7727C10.4727 11.1545 10.1727 11.2636 9.95455 11.4818C9.92727 11.5091 9.92727 11.5091 9.9 11.5364L8.23636 13.5818L6.57273 11.5364C6.54545 11.5091 6.54545 11.5091 6.51818 11.4818C6.3 11.2636 6.02727 11.1545 5.7 11.1545H1.69091C1.41818 11.1545 1.2 10.9364 1.2 10.6636V1.71818C1.2 1.44545 1.41818 1.22727 1.69091 1.22727H14.7818C15.0545 1.22727 15.2727 1.44545 15.2727 1.71818V10.6636Z"
                fill="#101011"
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

let searchValue = ref('')

const visibleBottom = ref(false)
const value = ref([0, 200])
let numberValue = ref(null)

async function searchProduct () {
  if (searchValue.value)
    await navigateTo({
      path: '/search',
      query: {
        search: searchValue.value
      }
    })

  searchValue.value = ''
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
