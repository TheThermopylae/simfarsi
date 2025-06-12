<template>
  <section
    class="bg-[#F8F8F8] py-6 flex-center fixed w-full bottom-0 z-50 left-0 text-xs gap-3"
  >
    <p>قابل پرداخت : 394,000 تومان</p>
    <button
      v-if="!loading"
      @click="submitAd"
      class="rounded-2xl bg-[#D9D9D9] py-3.5 px-14 text-center font-peydaBlack h-12 w-32 flex-center"
    >
      پرداخت
    </button>
    <button
      v-else
      class="rounded-2xl bg-[#D9D9D9] py-3.5 px-14 text-center font-peydaBlack h-12 w-32 flex-center"
    >
      <LoadingSpinner />
    </button>
    <Toast />
  </section>
</template>

<script setup>
let props = defineProps(['data', 'steps', 'payType'])
let emit = defineEmits(['goStepThree'])

let loading = ref(false)

let { showToast } = useToastComp()

async function submitAd () {
  if (props.steps == 2) emit('goStepThree')
  else {
    try {
      loading.value = true

      let data = await $fetch('/api/ad/addUserAd', {
        credentials: 'include',
        body: props.data,
        method: 'POST'
      })

      if (props.data.ad_type != 'free') {
        if (props.payType == 1) {
          showToast('error', 'خطا', 'موجودی کیف پول شما کافی نیست')
        } else {
          return navigateTo(data.paymentLink, {
            open: {
              target: '_blank'
            }
          })
        }
      } else {
        showToast(data.message)
      }
    } catch (error) {
      showToast('error', 'خطا', error.data)
      console.log(error)
    } finally {
      loading.value = false
    }
  }
}
</script>
