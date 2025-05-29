<template>
  <h2 class="text-xs pr-4 border-b border-gray-300 pb-4 mb-4">
    جدیدترین آگهی ها
  </h2>
  <section class="mb-5">
    <MainAdCard v-for="item in 10"></MainAdCard>
  </section>
</template>
