<template>
  <main class="container">
    <AdSimcardDetails
      :data="simcardData"
      @nextStep="steps = 2"
      v-if="steps == 1"
    />
    <AdSelectAdType
      :data="simcardData"
      @prevStep="steps = 1"
      v-if="steps == 2"
    />
    <AdPayPage
      :payType="payType"
      v-if="steps == 3"
      @prevStep="steps = 2"
      @changePayType="chagngeTypeFunc"
    />
    <AdPaySection
      :payType="payType"
      :steps="steps"
      :data="simcardData"
      v-if="steps > 1"
      @goStepThree="steps = 3"
    />
  </main>
</template>

<script setup>
useHead({
  title: '| افزودن آگهی سیمکارت'
})

let steps = ref(1)

let payType = ref(0)

let simcardData = reactive({
  title: '',
  dec: '',
  ad_type: 'free',
  sale: 'نقد',
  price: '',
  Operator: '',
  simstatus: '',
  Numbertype: '',
  phone: '',
  division: 'sim'
})

function chagngeTypeFunc (item) {
  payType.value = item
}
</script>
