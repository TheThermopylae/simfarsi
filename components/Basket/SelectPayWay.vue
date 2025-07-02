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
    <Button
      pt:root="!w-full !block !text-center !p-2 !rounded-md !mt-3"
      label="پرداخت"
      :loading="loading"
      @click="payFunc"
    />
  </section>
</template>

<script setup>
let localProducts = ref(
  JSON.parse(localStorage.getItem('product')) || {
    totalPrice: 0,
    products: []
  }
)

let loading = ref(false)

async function payFunc () {
  try {
    loading.value = true

    let data = await $fetch('/api/payment/buyproduct', {
      credentials: 'include',
      method: 'POST',
      body: localProducts.value
    })

    console.log(data)
  } catch (error) {
    console.log(data)
  } finally {
    loading.value = false
  }
}
</script>
