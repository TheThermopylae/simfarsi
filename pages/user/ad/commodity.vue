<template>
  <main class="container">
    <AdCommodityDetails
      :data="commodityData"
      @nextStep="steps = 2"
      v-if="steps == 1"
    />
    <AdSelectAdType
      :data="commodityData"
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
      :data="commodityData"
      v-if="steps > 1"
      @goStepThree="steps = 3"
    />
  </main>
</template>

<script setup>
useHead({
  title: '| افزودن آگهی کالای دیجیتال'
})

let steps = ref(1)

let payType = ref(0)

let commodityData = reactive({
  title: '',
  dec: '',
  category: '',
  ad_type: 'free',
  sale: 'نقد',
  price: '',
  img: '',
  division: 'digi'
})

function chagngeTypeFunc (item) {
  payType.value = item
}
</script>
