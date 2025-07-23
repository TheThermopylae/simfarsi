<template>
  <NuxtLayout name="default">
    <div>
      <div class="container">
        <UserDashboardUserAccountInformationSection />
        <UserDashboardUserAccountBalance />
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
        </UserDashboardServicesSection>
        <UserDashboardUserAccountMyOrders />
      </div>
      <AdSection>
        <div class="flex justify-between items-center w-full">
          <h2 class="text-xs">آگهی های من</h2>
          <div class="flex text-2sm gap-3">
            <button
              class="px-2 py-1 rounded-full transition-all"
              :class="{ primary: status == 'all' }"
              @click="status = 'all'"
            >
              همه
            </button>
            <button
              class="px-2 py-1 rounded-full transition-all"
              :class="{ primary: status == 'active' }"
              @click="status = 'active'"
            >
              فعال
            </button>
            <button
              class="px-2 py-1 rounded-full transition-all"
              :class="{ primary: status == 'semi-work' }"
              @click="status = 'semi-work'"
            >
              نیمه کار
            </button>
            <button
              class="px-2 py-1 rounded-full transition-all"
              :class="{ primary: status == 'notActive' }"
              @click="status = 'notActive'"
            >
              غیر فعال
            </button>
          </div>
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

let status = ref('all')
</script>
