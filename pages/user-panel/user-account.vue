<template>
  <NuxtLayout name="default">
    <div>
      <div class="container">
        <UserDashboardUserAccountInformationSection />
        <UserDashboardUserAccountBalance />
        <UserDashboardUserAccountIdoknowSlider />
        <UserDashboardUserAccountBestServices />
        <UserDashboardUserAccountInviteFriend />
        <UserDashboardUserAccountServicesSection />
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
