<template>
  <main class="container">
    <UserDashboardAdCommodityDetails
      :data="commodityData"
      @nextStep="steps = 2"
      v-if="steps == 1"
    />
    <UserDashboardAdSelectAdType
      :data="commodityData"
      @prevStep="steps = 1"
      v-if="steps == 2"
    />
    <UserDashboardAdPayPage
      :payType="payType"
      v-if="steps == 3"
      @prevStep="steps = 2"
      @changePayType="chagngeTypeFunc"
    />
    <UserDashboardAdPaySection
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
  title: '| افزودن آگهی سیمکارت'
})

let steps = ref(2)

let payType = ref(0)

let commodityData = reactive({
  title: '324234',
  dec: '423432',
  category: '',
  ad_type: 'free',
  sale: 'نقد',
  price: 5000,
  img: 's'
})

function chagngeTypeFunc (item) {
  payType.value = item
}
</script>
