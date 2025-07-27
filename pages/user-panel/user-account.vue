<template>
  <NuxtLayout name="default">
    <div>
      <div class="container">
        <UserDashboardUserAccountInformationSection />
        <!-- <UserDashboardUserAccountBalance />
        <UserDashboardUserAccountIdoknowSlider />
        <UserDashboardUserAccountBestServices />
        <UserDashboardUserAccountInviteFriend />
        <UserDashboardServicesSection>
          <template #title1> اعتبار خرید کالا </template>
          <template #p1> تا سقف 100 میلیون تومان</template>
          <template #title2>پرداخت اقساط</template>
          <template #p2> باز پرداخت اقساط اعتباری</template>
          <template #title3>سیستم کسب در آمد </template>
          <template #p3> با بازی کردن پول در بیار</template>
        </UserDashboardServicesSection> -->
        <UserDashboardUserAccountMyOrders />
      </div>
      <AdSection :products="myAds.products">
        <div class="flex justify-between items-center w-full">
          <h2 class="text-xs">آگهی های من</h2>
        </div>
      </AdSection>
    </div>
  </NuxtLayout>
</template>

<script setup>
definePageMeta({
  layout: false
})

useHead({
  title: '| حساب کاربری'
})

let { data: myAds } = await useFetch(`/api/ad/getAds`, {
  credentials: 'include'
})
</script>
