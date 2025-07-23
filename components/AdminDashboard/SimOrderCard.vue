<template>
  <article class="bg-white p-3 rounded-2xl">
    <div class="flex justify-between items-center mb-2">
      <h4>
        مبلغ سفارش :
        <span class="font-peydaB">{{ props.data.price }} تومان</span>
      </h4>
      <svg
        v-if="!loading"
        @click="changeStatus"
        xmlns="http://www.w3.org/2000/svg"
        width="1.3em"
        height="1.3em"
        viewBox="0 0 24 24"
        class="cursor-pointer"
      >
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M16.977 19.5A9 9 0 0 0 10 3.223M16.977 19.5V16m0 3.5H20.5M7 4.516a9 9 0 0 0 7 16.261M7 4.516V8m0-3.484H3.5"
          color="currentColor"
        />
      </svg>
      <LoadingSpinner v-else />
    </div>
    <h4>
      وضعیت :
      <span
        class="font-peydaB"
        v-text="props.data.statusorder == 'false' ? 'در انتظار' : 'تحویل شده'"
        :class="{
          'text-green-500': props.data.statusorder == 'true',
          'text-blue-500': props.data.statusorder == 'false'
        }"
      ></span>
    </h4>
    <div class="text-center text-sm">
      <img :src="`/simlogo/${props.data.productID.Operator}.png`" alt="" />
      <NuxtLink
        :to="{
          path: '/simcard',
          query: {
            uid: props.data.productID.uid,
            title: props.data.productID.title
          }
        }"
        class="my-2 font-peydaB underline"
        >{{ props.data.productID.title }}</NuxtLink
      >
      <h5 class="my-2">
        شماره :<span> {{ props.data.productID.phone }}</span>
      </h5>
      <h5 class="my-2">
        وضعیت سیمکارت :<span> {{ props.data.productID.simstatus }}</span>
      </h5>
      <h5 class="my-2">
        فروش :<span> {{ props.data.productID.sale }}</span>
      </h5>
      <h5>
        نوع شماره :<span> {{ props.data.productID.Numbertype }}</span>
      </h5>
    </div>
    <Toast />
  </article>
</template>

<script setup>
let props = defineProps(['data'])
let emit = defineEmits(['changedStatus'])

let { showToast } = useToastComp()
let loading = ref(false)

async function changeStatus () {
  try {
    loading.value = true

    let data = await $fetch('/api/admin/orders/changeOrderStatus', {
      method: 'POST',
      credentials: 'include',
      body: { id: props.data._id }
    })

    showToast('وضعیت سفارش تغییر کرد.')
    emit('changedStatus')
  } catch (err) {
    showToast('error', 'خطا', err.data)
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
h5 {
  font-family: 'PeydaWebFaNum-Bold';
}

span {
  font-family: 'PeydaWebFaNum-Medium';
}
</style>
