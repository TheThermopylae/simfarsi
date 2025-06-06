<template>
  <div class="flex flex-col min-h-screen bg-sec">
    <ClientOnly>
      <AdminDashboardSideBar></AdminDashboardSideBar>
      <AdminDashboardTheDrawer class="lg:hidden"></AdminDashboardTheDrawer>
      <div class="flex-grow container m-auto lg:pt-5">
        <slot />
      </div>
    </ClientOnly>
  </div>
</template>
