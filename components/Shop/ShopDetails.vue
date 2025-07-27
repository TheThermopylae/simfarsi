<template>
  <section class="rounded-b-[58px] container px-7 mb-7">
    <div class="h-[160px] relative">
      <img
        :src="`${$config.public.API_BASE_URL}${props.data.img}`"
        alt="banner"
        class="w-full h-full rounded-[36px]"
      />
      <img
        src="/avatar.png"
        alt="avatar"
        class="w-[80px] h-[80px] rounded-full border-[3px] border-white absolute right-5 bottom-0 translate-y-1/2"
      />
    </div>
    <h1 class="text-center mt-2 text-xs font-peydaB">
      فروشگاه {{ props.data.name }}
    </h1>
    <div class="mt-5">
      <p class="text-2sm">{{ props.data.shomedec }}</p>
      <h3 class="text-xs my-1">
        <span class="font-peydaB">استان : </span>{{ props.data.ostan }}
      </h3>
      <h3 class="text-xs my-1">
        <span class="font-peydaB">شهر : </span>{{ props.data.shahr }}
      </h3>
      <p class="text-xs">
        <span class="font-peydaB">آدرس کامل : </span>{{ props.data.address }}
      </p>
    </div>
  </section>
</template>

<script setup>
let props = defineProps(['data'])
</script>
