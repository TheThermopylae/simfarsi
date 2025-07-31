export default defineEventHandler(async event => {
  let token = getCookie(event, 'token')
  let config = useRuntimeConfig()

  try {
    let data = await $fetch(`${config.public.API_BASE_URL}/admin/shop`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    return data.shops
  } catch (error) {
    return error
  }
})
