export default defineNuxtPlugin(async nuxtApp => {
  let { userData } = userAuth()

  let headers = useRequestHeaders(['cookie'])

  try {
    let data = await $fetch('/api/auth/me', {
      headers
    })

    userData.value = data.user
  } catch (error) {
    userData.value = null
  } finally {
  }
})
