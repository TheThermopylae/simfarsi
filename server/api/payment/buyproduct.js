export default defineEventHandler(async event => {
  let token = getCookie(event, 'token')
  let config = useRuntimeConfig()
  let body = await readBody(event)

  try {
    let data = await $fetch(`${config.public.API_BASE_URL}/user/buyproduct`, {
      headers: {
        Authorization: `Bearer ${token}`
      },
      method: 'POST',
      body
    })

    console.log(data)
    return data
  } catch (error) {
    console.log(error)
    return error
  }
})
