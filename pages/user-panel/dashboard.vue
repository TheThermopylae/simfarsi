<template>
  <main class="container">
    <UserDashboardDashbaordTitleSection :data="data" />
    <UserDashboardDashbaordMyIncome />
    <UserDashboardNotifSection />
    <UserDashboardDashbaordProductCard />
    <UserDashboardDashbaordRequestPost />
    <UserDashboardDashbaordSimRecommend />
    <UserDashboardDashbaordTheFactors />
    <h2 class="text-xs mt-5">محصول جدید همکار</h2>
    <SimpleCardSlider />
    <UserDashboardServicesSection>
      <template #title1>
        اعتبار کسب وکار
        <span class="primary rounded-full p-1 !text-2sm mr-2">بدون ضامن</span>
      </template>
      <template #p1> تا سقف 250 میلیون تومان</template>
      <template #title2>پرداخت اقساط</template>
      <template #p2> باز پرداخت اقساط اعتباری</template>
      <template #title3>وام ویژه کسب و کار ها</template>
      <template #p3>وام حمایت از کسب و کار</template>
    </UserDashboardServicesSection>
  </main>
</template>

<script setup>
useHead({
  title: '| داشبورد'
})

let { data } = await useFetch('/api/shop/getShop', {
  credentials: 'include'
})

console.log(data.value)
</script>
