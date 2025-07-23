<template>
  <main class="container">
    <div class="mb-4">
      <label for="username" class="font-peydaB text-xs">نام کاربری</label>
      <input
        v-model="userEditData.username"
        type="text"
        id="username"
        class="bg-[#F8F8F8] rounded-2xl p-5 block w-full mt-3 placeholder:text-xs placeholder:text-black text-xs"
        placeholder="نام کاربری خود را بنویسید"
      />
    </div>
    <div class="mb-4">
      <label for="codemeli" class="font-peydaB text-xs">کد ملی</label>
      <input
        v-model="userEditData.codemeli"
        type="text"
        id="codemeli"
        class="bg-[#F8F8F8] rounded-2xl p-5 block w-full mt-3 placeholder:text-xs placeholder:text-black text-xs"
        placeholder="کد ملی خود را بنویسید"
      />
    </div>
    <div class="mb-4">
      <label for="email" class="font-peydaB text-xs">ایمیل</label>
      <input
        v-model="userEditData.email"
        type="text"
        id="email"
        class="bg-[#F8F8F8] rounded-2xl p-5 block w-full mt-3 placeholder:text-xs placeholder:text-black text-xs"
        placeholder="ایمیل خود را بنویسید"
      />
    </div>
    <div class="mb-4">
      <label for="avatar" class="font-peydaB text-xs">آواتار</label>
      <input
        id="avatar"
        type="file"
        ref="fileInput"
        class="hidden"
        @change="handleFile"
        accept="image/*"
      />
      <button
        @click="triggerFileInput"
        class="font-peydaB my-3 border-2 border-dashed w-full h-[130px] bg-white flex justify-center items-center flex-col border-black p-10 gap-1 rounded-2xl text-xs overflow-hidden"
      >
        انتخاب عکس
      </button>
    </div>
    <div class="flex items-center gap-3 mb-4" v-if="showAvatar">
      <Image
        :src="showAvatar"
        pt:image="!size-[60px] !rounded-md"
        pt:rotateRightButton="!hidden"
        pt:rotateLeftButton="!hidden"
        alt="product-image"
        preview
      />
      <p class="text-2sm">برای بزرگنمایی روی عکس ضربه بزنید</p>
    </div>
    <Button
      :loading="loading"
      label="ثبت اطلاعات"
      pt:root="!text-xs !rounded-full !block !w-full !p-3"
      @click="sendData"
    />
    <Toast />
  </main>
</template>

<script setup>
let { userData } = userAuth()
let { showToast } = useToastComp()

let userEditData = reactive({
  username: userData.value.username || '',
  codemeli: userData.value.codemeli || '',
  email: userData.value.email || '',
  avatar: ''
})

let showAvatar = ref(null)
const fileInput = ref(null)

let loading = ref(false)

const triggerFileInput = () => {
  fileInput.value.click()
}

const handleFile = event => {
  const file = event.target.files[0]
  if (!file) return

  userEditData.avatar = file

  const reader = new FileReader()
  reader.onload = () => {
    showAvatar.value = reader.result
  }
  reader.readAsDataURL(file)
}

async function sendData () {
  if (!userEditData.username || !userEditData.codemeli || !userEditData.email)
    showToast('warn', 'هشدار', 'لطفا تمامی فیلدها را پر کنید!')
  else {
    try {
      loading.value = true

      let formData = new FormData()
      formData.append('username', userEditData.username)
      formData.append('email', userEditData.email)
      formData.append('codemeli', userEditData.codemeli)
      formData.append('avatar', userEditData.avatar)

      let data = await $fetch('/api/editProfile', {
        credentials: 'include',
        method: 'POST',
        body: formData
      })

      showToast('پروفایل شما با موفقیت بروز شد.')
      userData.value = data.user
    } catch (err) {
      showToast('error', 'خطا', 'مشکلی پیش آمده، لطفا دوباره تلاش کنید')
    } finally {
      loading.value = false
    }
  }
}
</script>
