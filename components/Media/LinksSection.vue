<template>
  <section
    class="flex justify-evenly my-3 border-b pb3 border-gray-300 text-2sm"
  >
    <div class="relative pb-3 w-[60px] text-center">
      <NuxtLink to="/media"># هشتگ</NuxtLink>
      <Transition>
        <div
          v-if="route.path.endsWith('/media') || route.path.endsWith('/media/')"
          class="w-full h-[4px] rounded-t-full bg-black absolute bottom-0"
        ></div>
      </Transition>
    </div>
    <div class="relative pb-3 w-[60px] text-center">
      <NuxtLink to="/media/explore">اکسپلور</NuxtLink>
      <Transition>
        <div
          v-if="route.path.startsWith('/media/explore')"
          class="w-full h-[4px] rounded-t-full bg-black absolute bottom-0"
        ></div>
      </Transition>
    </div>
    <div class="relative pb-3 w-[60px] text-center">
      <NuxtLink to="/media/user/me">پروفایل</NuxtLink>
      <Transition>
        <div
          v-if="route.path == '/media/user/me'"
          class="w-full h-[4px] rounded-t-full bg-black absolute bottom-0"
        ></div>
      </Transition>
    </div>
  </section>
</template>

<script setup>
let route = useRoute()
</script>
