<template>
  <section class="my-5 text-xs">
    <h2 class="mb-2">انتخاب روش پرداخت</h2>
    <div class="flex items-center gap-2 border rounded-[10px] p-3">
      <input type="radio" name="radio-2" class="radio" checked />
      <h3 class="font-peydaB">پرداخت از طریق درگاه پرداخت</h3>
    </div>
    <div class="flex gap-2 rounded-[10px] p-3">
      <input type="radio" name="radio-2" class="radio" />
      <div>
        <h3 class="font-peydaB mb-2">پرداخت از طریق کیف پول</h3>
        <span class="text-2sm text-red-500"
          >موجودی : 10,000 تومان (ناکافی)</span
        >
      </div>
    </div>
    <NuxtLink to="/" class="primary w-full block text-center p-3 rounded-md mt-3">پرداخت</NuxtLink>
  </section>
</template>
