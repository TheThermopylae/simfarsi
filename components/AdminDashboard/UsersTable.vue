<template>
  <div class="overflow-x-auto bg-white mt-5 rounded-lg shadow p-5">
    <table class="table">
      <thead>
        <tr>
          <th>آیدی</th>
          <th>تاریخ عضویت</th>
          <th>شماره تلفن</th>
          <th>نقش</th>
        </tr>
      </thead>
      <tbody>
        <AdminDashboardUserCard
          v-if="users"
          @editUser="refreshDataFunc"
          @error="showErrorFunc"
          v-for="item in users.users"
          :user="item"
        ></AdminDashboardUserCard>
      </tbody>
    </table>
    <Toast />
  </div>
</template>

<script setup>
let { data: users, refresh } = await useAsyncData(() =>
  $fetch('/api/admin/userlist', {
    credentials: 'include'
  })
)

let { showToast } = useToastComp()

function refreshDataFunc () {
  refresh()
  showToast('نقش کاربر مورد نظر تغییر یافت')
}

function showErrorFunc (error) {
  showToast('error', 'خطا', error.data)
}
</script>
