<template>
  <article>
    <div
      class="bg-white h-[180px] rounded-xl justify-center relative shadow-md p-2"
    >
      <div class="flex items-center justify-center h-full flex-col">
        <div class="flex items-center gap-1">
          <img
            :src="'/simlogo/' + props.sim.Operator + '.png'"
            :alt="'سیمکارت ' + props.sim.Operator"
            class="size-10"
          />
          <p style="direction: ltr" class="font-peydaB text-xl">
            {{ props.sim.phone }}
          </p>
        </div>
        <div class="self-start mt-3">
          <span>{{ props.sim.Operator }}</span>
          /
          <span>{{ props.sim.Numbertype }}</span>
          /
          <span>{{ props.sim.simstatus }}</span>
        </div>
      </div>
      <div
        class="absolute bottom-2 w-full right-0 flex justify-between items-center px-3"
      >
        <NuxtLink
          class="primary py-1 px-3 rounded-lg"
          :to="{
            path: '/simcard',
            query: { uid: props.sim.uid, title: props.sim.title }
          }"
          >خرید</NuxtLink
        >
        <div class="font-peydaB">
          <span class="text-[#F1AEAE]">{{
            props.sim.price.toLocaleString()
          }}</span>
          تومان
        </div>
      </div>
    </div>
  </article>
</template>

<style scoped>
.relative {
  box-shadow: 0 5px 10px 0 #00000014;
}
</style>

<script setup>
let props = defineProps(['sim'])
</script>
