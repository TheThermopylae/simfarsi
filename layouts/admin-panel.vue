<template>
  <div class="flex flex-col min-h-screen bg-sec">
    <ClientOnly>
      <AdminDashboardSideBar></AdminDashboardSideBar>
      <AdminDashboardTheDrawer class="lg:hidden"></AdminDashboardTheDrawer>
      <div class="flex-grow container m-auto py-5 lg:pt-5">
        <slot />
      </div>
    </ClientOnly>
  </div>
</template>
