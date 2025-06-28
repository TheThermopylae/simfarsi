export default defineEventHandler(async event => {
  let token = getCookie(event, 'token')
  let body = await readBody(event)
  let config = useRuntimeConfig()

  let data = await $fetch(
    `${config.public.API_BASE_URL}/user/post/${body.id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      },
      method: 'PUT',
      body
    }
  )

  return data
})
