<template>
  <tr
    class="relative"
    :class="{ 'text-green-500': props.user.phone == userData.phone }"
  >
    <td>{{ props.user._id }}</td>
    <td>{{ props.user.date.split('T')[0] }}</td>
    <td>{{ props.user.phone }}</td>
    <td>
      {{ props.user.role }}
      <div
        class="lg:tooltip"
        data-tip="تغییر نقش"
        v-if="!loading && props.user.phone != userData.phone"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          class="inline-block mr-1 cursor-pointer"
          viewBox="0 0 48 48"
          @click="changeRole"
        >
          <g
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="4"
          >
            <path d="M18 31h20V5" />
            <path d="M30 21H10v22m34-32l-6-6l-6 6" />
            <path d="m16 37l-6 6l-6-6" />
          </g>
        </svg>
      </div>
      <LoadingSpinner
        class="w-3 h-3 mr-1 asolute"
        v-else-if="loading"
      ></LoadingSpinner>
    </td>
  </tr>
</template>

<script setup>
let props = defineProps(['user'])

let emit = defineEmits(['editUser', 'error'])

let loading = ref(false)

let { userData } = userAuth()

async function changeRole () {
  loading.value = true
  try {
    let data = await $fetch('/api/admin/changeRole', {
      method: 'POST',
      headers: {
        credentials: 'include'
      },
      body: { id: props.user._id }
    })

    emit('editUser')
  } catch (error) {
    emit('error', error)
  } finally {
    loading.value = false
  }
}
</script>
