<template>
  <div class="text-center">
    <div class="my-1">
      <img
        :src="`${$config.public.API_BASE_URL}${props.category.img}`"
        :alt="`عکس ${props.category.title}`"
        class="size-30 rounded-full block m-auto"
      />
      <h4 class="my-2">دسته بندی {{ props.category.title }}</h4>
    </div>
    <div class="flex justify-center flex-row-reverse gap-2">
      <div class="lg:tooltip" data-tip="حذف دسته بندی">
        <Button unstyled @click="visible = true">
          <template #icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="size-5 cursor-pointer hover:text-red-500 transition-all"
            >
              <path
                fill-rule="evenodd"
                d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                clip-rule="evenodd"
              />
            </svg>
          </template>
        </Button>
      </div>
      <div class="lg:tooltip" data-tip="ویرایش دسته بندی">
        <Button unstyled @click="visibleEdit = true">
          <template #icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="size-5 cursor-pointer hover:text-gray-600 transition-all"
            >
              <path
                d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z"
              />
            </svg>
          </template>
        </Button>
      </div>
    </div>
    <Dialog
      v-model:visible="visible"
      modal
      header="حدف دسته بندی"
      class="w-11/12 md:w-2/3 lg:w-2/5 xl:w-1/4"
    >
      <span class="text-surface-500 dark:text-surface-400 block mb-8"
        >آیا میخواهید دسته بندی <b>{{ props.category.title }}</b> را حذف
        کنید؟</span
      >
      <div class="grid grid-cols-2 gap-2">
        <Button
          unstyled
          type="button"
          label="خیر"
          class="border border-red-500 px-5 py-1.5 rounded text-red-500"
          severity="secondary"
          @click="visible = false"
        ></Button>
        <Button
          :disabled="loading"
          unstyled
          label="بله"
          type="button"
          class="btn-c px-5 py-1.5"
          severity="secondary"
          :loading="loading"
          @click="removeCategory"
        ></Button>
      </div>
    </Dialog>
    <Dialog
      v-model:visible="visibleEdit"
      modal
      :header="`ویرایش دسته بندی ${props.category.title}`"
      class="w-11/12 md:w-2/3 lg:w-2/5 xl:w-1/4"
    >
      <div class="flex items-center gap-4 mb-4">
        <label for="title" class="font-semibold req">عنوان </label>
        <InputText
          id="title"
          class="flex-auto"
          autocomplete="off"
          v-model="title"
        />
      </div>
      <div class="flex items-center gap-4 mb-8">
        <label for="href" class="font-semibold req">مسیر</label>
        <InputText
          id="href"
          class="flex-auto"
          autocomplete="off"
          v-model="props.category.href"
        />
      </div>
      <div class="grid grid-cols-2 gap-2">
        <Button
          unstyled
          type="button"
          label="لغو"
          class="border border-red-500 px-5 py-1.5 rounded text-red-500"
          severity="secondary"
          @click="closeEditModal"
        ></Button>
        <Button
          :disabled="loadingEdit"
          unstyled
          label="ویرایش"
          type="button"
          class="btn-c px-5 py-1.5"
          severity="secondary"
          :loading="loadingEdit"
          @click="editCategory"
        ></Button>
      </div>
    </Dialog>
  </div>
</template>

<script setup>
let props = defineProps(['category'])
let emit = defineEmits(['success', 'error', 'successEdit', 'errorEdit'])

let title = ref(props.category.title)

let loading = ref(false)
let loadingEdit = ref(false)

let visible = ref(false)
let visibleEdit = ref(false)

function closeEditModal () {
  visibleEdit.value = false
  title.value = props.category.title
}

async function removeCategory () {
  loading.value = true

  try {
    let data = await $fetch('/api/admin/categories/deleteCategory', {
      credentials: 'include',
      body: { id: props.category._id },
      method: 'POST'
    })

    emit('success')
  } catch (err) {
    emit('error', err)
  } finally {
    loading.value = false
  }
}

async function editCategory () {
  if (!title.value || !props.category.href)
    emit('error', { data: 'لطفا فیلد های مربوطه را پر کنید' })
  else {
    loadingEdit.value = true
    try {
      let data = await $fetch('/api/admin/categories/editCategory', {
        credentials: 'include',
        body: { ...props.category, title: title.value },
        method: 'POST'
      })

      emit('successEdit')
    } catch (err) {
      emit('successError', err)
    } finally {
      loadingEdit.value = false
    }
  }
}
</script>
