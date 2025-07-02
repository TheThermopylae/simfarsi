<template>
  <article
    class="bg-[#F6F6F6] p-2 rounded flex gap-2 items-center justify-between mb-3 last:mb-0"
  >
    <div class="flex gap-2 items-center">
      <img
        v-if="props.data.division == 'digi'"
        :src="`${$config.public.API_BASE_URL}${props.data.img}`"
        :alt="`عکس ${props.data.title}`"
        class="w-[52px] h-[52px] rounded bg-white"
      />
      <img
        v-else
        :src="`/simlogo/${props.data.Operator}.png`"
        class="w-[52px] h-[52px] rounded bg-white"
        alt=""
      />
      <div class="text-xs">
        <h4 class="mb-3">{{ props.data.title }}</h4>
        <span v-if="props.data.isaccept" class="text-green-500">تایید شده</span>
        <span v-else class="text-orange-500">در انتظار تایید</span>
      </div>
    </div>
    <Drawer
      v-model:visible="visible"
      :header="`حذف ${props.data.title}`"
      position="full"
      class="!text-black"
      @after-hide="reason = null"
    >
      <p class="text-sm font-peydaB mb-5">علت حذف آگهی خود را مشخص کنید</p>
      <section class="text-xs">
        <div class="flex items-center gap-2 mb-5">
          <input
            type="radio"
            name="radio-1"
            class="radio"
            v-model="reason"
            value="1"
          />
          <p>محصول به فروش رفت</p>
        </div>
        <div class="flex items-center gap-2 mb-5">
          <input
            type="radio"
            name="radio-1"
            class="radio"
            v-model="reason"
            value="2"
          />
          <p>از فروش منصرف شدم</p>
        </div>
        <div class="flex items-center gap-2 mb-5">
          <input
            type="radio"
            name="radio-1"
            class="radio"
            v-model="reason"
            value="3"
          />
          <p>در انتشار آگهی به مشکل خوردم</p>
        </div>
        <div class="flex items-center gap-2">
          <input
            type="radio"
            name="radio-1"
            class="radio"
            v-model="reason"
            value="4"
          />
          <p>دلایل دیگر</p>
        </div>
      </section>
      <div class="absolute bottom-3 right-0 px-3 w-full" @click="removeAd">
        <Button label="تایید" class="" pt:root="!text-xs !block !w-full" />
      </div>
    </Drawer>
    <Button
      icon="pi pi-trash"
      unstyled
      @click="visible = true"
      :loading="loading"
    />
    <Toast />
  </article>
</template>

<script setup>
let props = defineProps(['data'])
let refresh = inject('refresh')

let visible = ref(false)

let reason = ref(null)

let { showToast } = useToastComp()
let loading = ref(false)

async function removeAd () {
  if (!reason.value)
    showToast('warn', 'هشدار', 'لطفا دلیل خود را برای حذف آگهی مشخص کنید')
  else {
    try {
      let data = await $fetch('/api/ad/removeAd', {
        credentials: 'include',
        method: 'POST',
        body: { id: props.data._id }
      })

      await refresh()
      showToast('آگهی شما با موفقیت حدف شد')
      visible.value = false
    } catch (err) {
      showToast('error', 'خطا', err.data)
    } finally {
      loading.value = false
    }
  }
}
</script>
