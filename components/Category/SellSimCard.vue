<template>
  <section class="bg-[#EBEBEB] mt-5 px-2 py-2 rounded-2xl">
    <h2 class="mt-3 mb-3.5 text-sm">قیمت گذاری و فروش فوری سیم کارت</h2>
    <div class="flex gap-0.5 justify-center">
      <InputOtp
        v-model="value"
        integerOnly
        :length="7"
        style="direction: ltr"
      />
      <input
        placeholder="پیش شماره"
        type="number"
        class="placeholder:text-center placeholder:text-black placeholder:text-2sm text-center bg-white w-[70px] rounded-[10px] text-sm"
      />
    </div>
    <div class="flex justify-between gap-2 my-3">
      <input
        placeholder="وضعیت خط"
        type="text"
        id="sim-status"
        class="bg-white w-full rounded-[10px] placeholder:text-black px-4"
      />
      <Select
        v-model="selectetType"
        :options="status"
        placeholder="وضعیت خط"
        class="w-full"
        :pt="{
          option: ({ context }) => ({
            class: context.selected ? '!bg-black !text-white' : ''
          })
        }"
      />
    </div>
  </section>
</template>

<script setup>
let value = ref('')

let selectetType = ref('')
let status = ref(['اعتباری', 'داعمی'])
</script>

<style scoped>
:deep(.p-inputotp) {
  gap: 2px !important;
}
:deep(.p-inputotp-input) {
  width: 35px !important;
  height: 30px !important;
  border: none !important;
  border-radius: 10px !important;
  font-size: 14px !important;
}
</style>
