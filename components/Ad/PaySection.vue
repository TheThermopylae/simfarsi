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

      let data = null

      if (props.data.division == 'sim') {
        let fetchData = await $fetch('/api/ad/addSimAd', {
          credentials: 'include',
          body: props.data,
          method: 'POST'
        })

        data = fetchData
      } else {
        let formData = new FormData()

        formData.append('title', props.data.title)
        formData.append('dec', props.data.dec)
        formData.append('price', props.data.price)
        formData.append('img', props.data.img)
        formData.append('category', props.data.category._id)
        formData.append('ad_type', props.data.ad_type)
        formData.append('sale', props.data.sale)
        formData.append('division', props.data.division)
        formData.append('role', props.data.role)

        let fetchData = await $fetch('/api/ad/addDigitalAd', {
          credentials: 'include',
          body: formData,
          method: 'POST'
        })

        data = fetchData
      }

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
        showToast(
          'آگهی ثبت شد، منتظر تایید ادمین باشید.(در حال هدایت به صفحه آگهی ها)'
        )
        setTimeout(() => {
          return navigateTo('/user/myad')
        }, 5000)
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
