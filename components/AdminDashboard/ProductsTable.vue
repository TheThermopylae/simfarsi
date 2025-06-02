<template>
  <div>
    <div
      class="overflow-x-auto bg-white py-2 px-4 rounded-lg shadow"
      v-if="products && products.length > 0"
    >
      <table class="table">
        <!-- head -->
        <thead>
          <tr>
            <th>نام</th>
            <th>شناسه محصول</th>
            <th>توضیحات</th>
            <th>قیمت</th>
            <th>دسته بندی</th>
            <th>نام فروشگاه</th>
            <th>شماره تماس</th>
            <th>نوع تبلیغ</th>
            <th>وضعیت سیمکارت</th>
            <th>فروش</th>
            <th>اوپراتور</th>
            <th>نوع شماره</th>
            <th>تایید شده</th>
            <th>تاریخ</th>
            <th>شناسه کاربر</th>
            <th>موجود</th>
          </tr>
        </thead>
        <tbody>
          <AdminDashboardProductCard
            v-for="item in props.products"
            :key="item._id"
            :product="item"
            @deletedProduct="$emit('acceptDelete')"
          ></AdminDashboardProductCard>
        </tbody>
      </table>
    </div>
    <p v-else class="text-gray-500 text-center">محصولی وجود ندارد</p>
  </div>
</template>

<script setup>
let props = defineProps(['products'])
</script>

<style scoped>
th {
  text-align: center;
}
</style>
