<template>
  <article class="bg-white p-3 rounded-2xl">
    <div class="flex justify-between items-center text-xs md:text-[16px]">
      <div class="flex items-center gap-2">
        <img
          :src="`${$config.public.API_BASE_URL}${props.data.img}`"
          :alt="`عکس فروشگاه ${props.data.nameshop}`"
          class="size-[50px] rounded-md"
        />
        <h4 class="font-peydaB">فروشگاه {{ props.data.nameshop }}</h4>
      </div>
      <div class="flex items-center gap-2">
        <span
          v-text="props.data.isaccept ? 'تایید شده' : 'تایید نشده'"
          :class="props.data.isaccept ? 'text-green-500' : 'text-red-500'"
        ></span>
        <div v-if="!loading">
          <svg
            @click="changeAcceptStatus"
            v-if="!props.data.isaccept"
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            class="text-green-500 cursor-pointer"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M5 14.5s1.5 0 3.5 3.5c0 0 5.559-9.167 10.5-11"
            />
          </svg>
          <svg
            @click="changeAcceptStatus"
            v-else
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            class="text-red-500 cursor-pointer"
          >
            <g fill="none" fill-rule="evenodd">
              <path
                d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
              />
              <path
                fill="currentColor"
                d="m12 13.414l5.657 5.657a1 1 0 0 0 1.414-1.414L13.414 12l5.657-5.657a1 1 0 0 0-1.414-1.414L12 10.586L6.343 4.929A1 1 0 0 0 4.93 6.343L10.586 12l-5.657 5.657a1 1 0 1 0 1.414 1.414z"
              />
            </g>
          </svg>
        </div>
        <LoadingSpinner class="size-3" v-else />
      </div>
    </div>
    <div class="grid grid-cols-2 mt-3 gap-2 text-xs xl:text-[16px]">
      <h4 class="col-span-2">صاحب فروشگاه : {{ props.data.name }}</h4>
      <h4>استان : {{ props.data.ostan }}</h4>
      <h4>شهر : {{ props.data.shahr }}</h4>
      <h4>شماره تلفن : {{ props.data.phone }}</h4>
      <h4>شماره تلفن ثابت : {{ props.data.phonehome }}</h4>
      <h4 class="col-span-2">توضیحات فروشگاه : {{ props.data.shomedec }}</h4>
      <h4 class="col-span-2">آدرس کامل : {{ props.data.address }}</h4>
    </div>
    <Toast />
  </article>
</template>

<script setup>
let props = defineProps(['data'])
let emit = defineEmits(['changeStatus'])

let { showToast } = useToastComp()

let loading = ref(false)

async function changeAcceptStatus () {
  try {
    loading.value = true

    let data = await $fetch('/api/admin/shops/acceptShop', {
      credentials: 'include',
      method: 'POST',
      body: { id: props.data._id }
    })

    showToast(data.msg)
    emit('changeStatus')
  } catch (err) {
    showToast('error', 'خطا', err.data)
  } finally {
    loading.value = false
  }
}
</script>
