<template>
  <section
    class="bg-[#F9F9F9] h-[316px] rounded border border-[#F1F1F1] text-[#010562] my-3 pr-3 relative"
  >
    <img :src="'/simlogo/' + props.data.Operator +'.png'" class="size-[95px]" alt="" />
    <h1 class="center text-[40px]">{{ props.data.phone }}</h1>
  </section>
</template>

<script setup>
let props = defineProps(['data'])
</script>
